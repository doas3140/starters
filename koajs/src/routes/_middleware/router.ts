import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import {ZodType} from 'zod'
import {auth, UserContext} from './auth'
import {checkBody, ZodContext} from './zod'

class _MiddlewareRouter<State, Context> extends Router<State, Context> {
  constructor() {
    super()
  }

  auth(): _MiddlewareRouter<State, Context & UserContext> {
    this.use(auth() as any)
    return this as any
  }

  body<Schema extends ZodType<any, any, any>>(
    schema: Schema,
  ): _MiddlewareRouter<State, Context & ZodContext<Schema>> {
    this.use(bodyParser())
    this.use(checkBody(schema))
    return this as any
  }
}

export const MiddlewareRouter = () => new _MiddlewareRouter()
