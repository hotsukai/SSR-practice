import App from "../client/App";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import routes from "../routes";
import { matchPath } from "react-router-dom";

type Props = {
  url: string;
};
const createHtml = async ({ url }: Props) => {
  console.info(`start creating html: ${url}`);
  const route = routes.find((r) => matchPath(r.path, url));
  if (!route) throw new Error("❗route not found");

  const serverData = await route.fetchInitData(url);
  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App serverData={serverData} />
    </StaticRouter>
  );

  return `
  <html>
    <head>
      <title>SSR practice</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify(
        serverData
      )}'>${pageHtml}</div>
      <script src="/public/client.js"></script>
    </body>
  </html>`;
};
export default createHtml;
