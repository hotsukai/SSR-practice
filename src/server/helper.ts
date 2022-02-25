import React from "react"
import ReactDOMServer from "react-dom/server"

type Props<T> = {
  pageComponent: React.FC<T> | React.VFC<T>
  title?: string
  props: T
}
const createHtml = <T>({ title = "My Rendering Practice", pageComponent, props }: Props<T>) => {
  const pageHtml = ReactDOMServer.renderToString(React.createElement(pageComponent, props, null))

  return `
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify(props)}'>${pageHtml}</div>
      <script src="client.js"></script>
    </body>
  </html>`
}
export default createHtml