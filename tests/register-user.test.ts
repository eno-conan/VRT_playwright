import { expect, test } from '@playwright/test'

test('ユーザ登録する', async ({ page }) => {
    // 登録ページを開く
    await page.goto('http://localhost:5173/register-user')

    // フォームの入力欄を埋める
    await page.fill('[data-test=emailInput]', 'foo@example.com')
    await page.fill('[data-test=nameInput]', 'foo')

    // 一時停止
    // await page.pause()

    // フォーム送信ボタンを押下
    await page.click('[data-test=submitButton]')

    // マイページに遷移したことを確認
    await expect(page.locator('[data-test=myPagePage]')).toHaveCount(1)
})