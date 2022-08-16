import {ENV} from '~/env'
import {MiddlewareRouter} from './_middleware'

const router = MiddlewareRouter()

router.get('/version', async ctx => {
  ctx.body = ENV.VERSION
})

export default router
