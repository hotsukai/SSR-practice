import App from "../client/App";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import routes from "../routes";
import { matchPath } from "react-router-dom";

type Props = {
  url: string;
  pageData: unknown;
};
const createHtml = async ({ url, pageData }: Props) => {
  // url は /ssr/id1 のような形式
  const pageElemHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App serverData={pageData} />
    </StaticRouter>
  );

  return `
  <html>
    <head>
      <title>SSR practice</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify(
        pageData
      )}'>${pageElemHtml}</div>
      <script src="/public/client.js"></script>
    </body>
  </html>`;
};
export default createHtml;
