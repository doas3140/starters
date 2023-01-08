import {Runner} from './utils/di'
import {Main, all_classes} from './main'

export const main = async () => {
	const runner = new Runner()

	console.log('Initiating classes...')

	for (const _class of all_classes) {
		runner.bind(_class).to(_class)
	}

	const main = runner.get(Main)
	await main.run()
}
