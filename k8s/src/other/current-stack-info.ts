import {Injectable} from '../utils/di'
import * as pulumi from '@pulumi/pulumi'

export class CurrentStackInfo extends Injectable {
    public readonly pulumiStack: string
    constructor() {
        super()
        this.pulumiStack = pulumi.getStack()
        console.log(`Current pulumi stack is ${this.pulumiStack}`)
    }
}
