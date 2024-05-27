


# SSRとSSGを自前実装してみた。
[記事](https://zenn.dev/hotsukai/articles/react_ssr_scratch)

- `/ssr`でSSRの結果が、~~`/ssg`でSSG結果が~~帰ってくる。
  - 詳細は[`src/server/index.ts`](/src/server/index.ts)
  - SSGは実装中

## 起動法
- Devサーバー起動 `npm run dev`
- ビルド(サーバーサイド・クライアントサイド) `npm run build`
- [WIP] ビルド結果を使って立ち上げ `npm run start`

## 起動
```sh
npm i
npm run dev
```

## 仕組み
### SSR
- 生成したHTMLを`<div id="root"></div>`配下に置いている。
- クライアント側のJSで`ReactDOM.hydrate`することで、生成済みのHTMLにイベントリスナーを設定している。

### データ受け渡し
- root要素にデータ属性で初期ページデータを渡している。
  - これはレスポンスが遅くなることでなんらかが表示されるまでの時間(FCP)の低下につながるので、スケルトンにしてクライアント側でフェッチするほうが一般には良い気もする。
  - next.jsだと`<script id="__NEXT_DATA__" type="application/json">`にJSONで入れていた。
- クライアント側でページ遷移するときはページで必要な情報をフェッチしてCSRしている。
- ページ側でSSRなのかデータをフェッチしてCSRなのかをハンドリングするのはしんどいので[`PageWrapper.tsx`](/src/client/PageWrapper.tsx)で抽象化した(したい)

## TODO
- `client.js`の分割


## 参考URL
https://ui.dev/react-router-server-rendering
