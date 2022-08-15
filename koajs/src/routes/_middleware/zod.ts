import {DefaultContext, DefaultState, Middleware} from 'koa'
import {ZodSchema} from 'zod'

export const checkBody =
  (schema: ZodSchema): Middleware =>
  async (ctx, next) => {
    const res = await schema.safeParseAsync(ctx.body || {})

    if (!res.success) {
      const err = res.error.format()
      return ctx.throw(402, JSON.stringify(err))
    }

    ctx.body = res.data

    return next()
  }
