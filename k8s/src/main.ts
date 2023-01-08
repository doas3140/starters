import {ExampleStack} from './example/stack'
import {Injectable, inject} from './utils/di'
import {CurrentStackInfo, TestingStack1} from './other'

export class Main extends Injectable {
	@inject(CurrentStackInfo.name) info!: CurrentStackInfo
	@inject(TestingStack1.name) testingStack1!: TestingStack1
	@inject(ExampleStack.name) example!: ExampleStack

	async run() {
		const stack = this.info.pulumiStack

		if (stack == 'test') {
			return this.testingStack1.create()
		}

		if (stack == 'example') {
			return this.example.create()
		}

		console.error('Unknown Stack')
		process.exit(1)
	}
}

export const all_classes = [CurrentStackInfo, TestingStack1, ExampleStack, Main]
