import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import {routes} from '~/routes'
import {ENV} from './env'

const _app = new Koa()

_app.use(bodyParser())

if (ENV.ENV == 'dev') {
  _app.use(logger())
}

for (const router of routes) {
  _app.use(router.routes()).use(router.allowedMethods())
}

export const app = _app
