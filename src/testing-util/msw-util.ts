import { setupWorker, rest, SetupWorkerApi } from 'msw'

export const buildMswWorker = (): SetupWorkerApi => {
    const worker = setupWorker(
        rest.post('http://localhost:8000/api/users', (_req, res, ctx) => {
            return res(
                ctx.json({
                    message: 'Success.',
                })
            )
        })
    )
    return worker;
}