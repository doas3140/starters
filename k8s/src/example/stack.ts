import {Injectable} from '../utils/di'

export class ExampleStack extends Injectable {
	public async create() {
		console.log(`Creating ${ExampleStack.name} stack...`)
		return {
			modifiedAt: new Date(),
		}
	}
}
