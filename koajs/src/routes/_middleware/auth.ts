import {DefaultState, Middleware} from 'koa'

import {z} from 'zod'
import {rs} from '../../utils'

const User = z.object({
  firstName: z.string(),
})

export type UserContext = {
  user: z.infer<typeof User>
}

export const auth = (): Middleware<DefaultState, UserContext> => async (ctx, next) => {
  const {authorization} = ctx.headers

  if (!authorization) {
    return ctx.throw(401)
  }

  const [authType, token] = authorization.trim().split(' ')

  // verify token
  const jwt = verifyJwt(token, 'secret')
  if (!jwt.ok) {
    return ctx.throw(401, 'Invalid JWT token')
  }

  // parse required fields
  const zod = await User.safeParseAsync(jwt.val)
  if (!zod.success) {
    console.log(zod.error.format())
    return ctx.throw(401, 'Invalid JWT token')
  }

  ctx.user = zod.data

  return next()
}

// TODO: real jwt.verify
function verifyJwt(token: string, secret: string): rs.Result<any> {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString('binary')
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join(''),
  )
  return {
    ok: true,
    val: JSON.parse(jsonPayload),
  }
}
