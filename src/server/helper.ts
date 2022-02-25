import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server";

type Props<T> = {
  pageComponent: React.FC<T> | React.VFC<T>
  title?: string
  props: T
  url: string
}
const createHtml = <T>({ title = "My Rendering Practice", pageComponent, props, url }: Props<T>) => {
  const pageElem = React.createElement(pageComponent, props, null)
  const elem = React.createElement(StaticRouter, { location: url }, pageElem)
  const pageHtml = ReactDOMServer.renderToString(elem)

  return `
  <!DOCTYPE html>
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