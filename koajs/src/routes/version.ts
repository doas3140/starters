import Router from 'koa-router'
import {z} from 'zod'
import {ENV} from '~/env'

const router = new Router()

router.get('/version', async ctx => {
  ctx.body = ENV.VERSION
})

export default router
