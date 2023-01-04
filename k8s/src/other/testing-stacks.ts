import {Injectable} from '../utils/di'

export class TestingStack1 extends Injectable {
    public async create() {
        console.log(`Creating ${TestingStack1.name} stack...`)
        return {
            createdAt: new Date()
        }
    }
}
