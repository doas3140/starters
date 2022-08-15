import request from 'supertest'
import {app} from '~/app'

describe('/version', () => {
  let server: request.SuperTest<request.Test>
  beforeAll(async () => {
    server = request(app.listen())
  })

  test('Sanity check', () => {
    expect(2 + 2).toBe(4)
  })

  test('Able to get version information w/ no headers', async () => {
    const res = await server.get('/version').send()
    expect(res.statusCode).toEqual(200)
  })
})
