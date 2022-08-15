import {z} from 'zod'
import fs from 'fs'
import path from 'path'
require('dotenv').config()

// schema
const schema = z.object({
  VERSION: z.string(),
  ENV: z.enum(['dev', 'prod']),
  PORT: z.number().or(z.string().transform(Number)).default(3000),
})

// version
const readVersionFromPackageJson = (): string | undefined =>
  JSON.parse(String(fs.readFileSync(path.join(__dirname, '../package.json'))))?.version

process.env.VERSION = readVersionFromPackageJson()

console.log(process.env.VERSION)

// parse and export
const _env = schema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables:\n', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const ENV = _env.data
