import type { AxiosResponse } from 'axios'
import { rest } from 'msw'

export const testHandlers = [
  rest.post('/test', async (req, res, ctx) => {
    const reqdata: any = await req.json()
    return res(ctx.status(200), ctx.json({ id: reqdata.id }))
  }),
]
