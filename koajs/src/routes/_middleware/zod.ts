import {Middleware} from 'koa'
import {z, ZodSchema, ZodType} from 'zod'

export type ZodContext<Schema extends ZodType<any, any, any>> = {
  json: z.infer<Schema>
}

export const checkBody =
  (schema: ZodSchema): Middleware =>
  async (ctx, next) => {
    const res = await schema.safeParseAsync(ctx.request?.body)

    if (!res.success) {
      const err = res.error.format()
      return ctx.throw(402, JSON.stringify(err))
    }

    ctx.json = res.data

    return next()
  }
