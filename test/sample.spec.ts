import { rest } from 'msw'
import { expect, test } from '../src/mocks/test'

test('should be 1', async ({ page, worker }) => {
  // override mock
  await worker.use(
    rest.post('/test', (request, response, context) =>
      response(
        context.status(200),
        context.json({
          id: 'a',
          title: 'apple',
        })
      )
    )
  )
  await page.goto('/')
  await expect(page.locator('[data-testid="fetch-test"]')).toHaveText('a')
})
