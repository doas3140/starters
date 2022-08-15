import Router from 'koa-router'
import {auth, checkBody, UserContext} from '~/routes/_middleware'
import {z} from 'zod'

const router = new Router<any, UserContext>()

router.use(auth())

const schema = z.object({
  ASD: z.string(),
})

router.get('/', async ctx => {
  const name = ctx.user.firstName
  ctx.body = {
    message: `Hello, ${name}!`,
  }
})

router.post('/', checkBody(schema), async ctx => {
    ctx.body = ctx.user
  })

export default router
