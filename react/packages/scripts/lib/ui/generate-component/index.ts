import inquirer from 'inquirer'
import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

type QuestionType = {
  type: string
  name: string
  message: string
  default: any
  choices?: string[]
}

const main = async () => {
  const packagesDir = path.join(process.cwd(), '..')
  const scriptDir = path.join(packagesDir, 'scripts/lib/ui/generate-component')
  console.log(scriptDir)

  const questions: QuestionType[] = [
    {
      type: 'input',
      name: 'component',
      message: 'What is React Component?',
      default: 'Button',
    },
    {
      type: 'list',
      name: 'subdir',
      message: 'What is sub directory of the component?',
      default: 'core',
      choices: ['core', 'forms', 'tables'],
    },
    // {
    //   type: 'confirm',
    //   name: 'createTest',
    //   message: 'Create test?',
    //   default: true,
    // },
  ]

  type Data = {
    type: string
    component: string
    subdir: string
  }

  const data = {
    ...(await inquirer.prompt<Data>(questions)),
    type: 'Atom',
  }

  const p = (relativePath: string) => path.join(scriptDir, relativePath)

  // paths
  const storyPath = path.join(
    packagesDir,
    `storybook/src/stories/${data.type.toLowerCase()}s/core`,
    `${camel2dash(data.component)}.stories.tsx`,
  )

  const componentPath = path.join(
    packagesDir,
    `ui/${data.type.toLowerCase()}s/core`,
    `${camel2dash(data.component)}.tsx`,
  )

  // check if exists
  if (fs.existsSync(storyPath)) throw new Error('story file already exist')
  if (fs.existsSync(componentPath)) throw new Error('component file already exist')

  const options = {}

  let fileContent = await ejsRender(p('./templates/story.ejs'), data, options)
  fs.writeFileSync(storyPath, fileContent)

  fileContent = await ejsRender(p('./templates/props.ejs'), data, options)
  fs.appendFileSync(componentPath, fileContent)
  const indexFilePath = path.join(componentPath, '..', '/index.tsx')
  const logger = fs.createWriteStream(indexFilePath, {
    flags: 'a', // 'a' means appending (old data will be preserved)
  })
  const line = `export * from './${camel2dash(data.component)}'`
  logger.write(`${line}`)
}

main()

const ejsRender = (template: any, data: any, options: any): Promise<string> =>
  new Promise((res, rej) => {
    ejs.renderFile(template, data, options, function (err, str) {
      if (err) return rej(err)
      res(str)
    })
  })

const camel2dash = (str: string) =>
  String(str)
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replaceAll(' ', '-')
    .substring(1)
export {}
