import { IndexPage } from '../client/pages';
import React from "react";
import express from 'express'
import ReactDOMServer from 'react-dom/server';
const app = express()

app.get('/', function (req, res) {
  const indexPageHtml = ReactDOMServer.renderToString(React.createElement(IndexPage))
  console.log(indexPageHtml);

  res.send(`
  <html>
    <head>
      <title>My SSR Practice</title>
    </head>
    <body>
      <div id="root">${indexPageHtml}</div>
      <script src="client.js"></script>
    </body>
  </html>`)
})


app.use(express.static('dist/public'))
app.listen(3000)