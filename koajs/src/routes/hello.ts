import {MiddlewareRouter} from '~/routes/_middleware'
import {z} from 'zod'

const schema = z.object({
  bodyName: z.string(),
})

const router = MiddlewareRouter().auth().body(schema)

router.post('/', async ctx => {
  const firstName = ctx.user.firstName
  const bodyName = ctx.json.bodyName
  ctx.body = {
    message: `Hello, ${firstName} ${bodyName}!`,
  }
})

export default router
