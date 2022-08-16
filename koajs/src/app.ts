import Koa from 'koa'
import logger from 'koa-logger'
import {routes} from '~/routes'
import {ENV} from './env'

const _app = new Koa()

if (ENV.ENV == 'dev') {
  _app.use(logger())
}

for (const router of routes) {
  _app.use(router.routes()).use(router.allowedMethods())
}

export const app = _app
