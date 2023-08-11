# playwrightを使ってVRTテスト実施

1. プロジェクト作成
```
npm create vite@latest
```
2. playwright導入
```
npm init playwright@latest
```

3. テスト実行時のサーバ設定(playwright.config.ts`の修正)
   1. [WEBSERVER周りの設定実施](https://blog.delpuppo.net/playwright-lets-start)

4. スクリーンショット取得のためのコード実装
   1. [基本的な実装構成](https://www.gaji.jp/blog/2022/06/20/10183/)
   2. [ブラウザを閉じないとテストが終了しない](https://blog.kapiecii.com/posts/2022/10/30/playwright-and-docker/)
      ```
         await browser.close();
      ```
5. [MSWを使ったテスト](https://zenn.dev/dyoshikawa/articles/07ab82a5cbcde0)
   1. インストール
   2. 初期化

6.モックサーバ起動した状態で実行
```
VITE_MOCKED_API=true npm run dev
```


### 他参考
- [スクリーンショット色々](https://testersdock.com/playwright-screenshot-capture/)
- [mswを使った例](https://zenn.dev/dyoshikawa/articles/07ab82a5cbcde0)

