import {sleep} from './other'
import {describe, it} from '@jest/globals'
import {inject, Injectable, Runner} from './di'

class Worker extends Injectable {
	work() {
		console.log('PROD working')
	}
	sleep(): number {
		console.log('PROD sleeping')
		return 1
	}
}

class Api extends Injectable {
	@inject(Worker.name)
	worker!: Worker

	api() {
		this.worker.work()
		this.worker.sleep()
	}
}

class MockWorker extends Worker {
	work(): number {
		console.log('MOCK working')
		return 2
	}
}

describe('DI', () => {
	const getMockRunner = () => {
		const runner = new Runner()
		runner.bind(Worker).to(Worker)
		runner.bind(Api).to(Api)
		const MockWorker = Worker.with({
			work: () => console.log('MOCK working'),
		})
		runner.rebind(Worker).to(MockWorker)
		return runner
	}

	it('example', async () => {
		const runner = getMockRunner()
		const api = runner.get(Api)
		api.api()
	})
})
