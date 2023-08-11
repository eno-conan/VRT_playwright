import { test, expect } from '@playwright/test'
import { webkit } from 'playwright'

test('Visual regression testing of top page', async () => {
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('http://localhost:5173/')

    // 撮影準備のため任意の操作を行う：これは無くてもいい。
    // await page.fill('.input', '入力値');

    expect(await page.screenshot({ fullPage: true })).
        toMatchSnapshot('screenshot/fullPage.png', {
            threshold: 0.075,
        });
    // ブラウザを閉じないとテストが終了しない
    await browser.close();
})  