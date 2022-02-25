## SSRとSSGを自前実装してみた。
- `/ssr`でSSR結果が、`/ssg`でSSG結果が帰ってくる。
  - 詳細は`src/server/index.ts`

## 仕組み
- 生成したHTMLを`<div id="root"></div>`配下に置いている。
- このroot要素にデータ要素として初期propsを渡している。
  - これはなんらかが表示されるまでの時間(FCP)の低下につながるので、スケルトンにしてクライアント側でフェッチするほうが一般には良さそう
- クライアント側のJSで`ReactDOM.hydrate`することで、生成済みのHTMLにイベントリスナーを設定している。

## TODO
- 複数ページ対応
- `client.js`の分割