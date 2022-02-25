import { IndexPage } from '../client/pages';
import React from "react";
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import { ToDoItem } from 'app';
const app = express()

const mockDB: ToDoItem[] = [
  { title: 'hoge', detail: 'hogehoge', isFinished: false },
  { title: 'fuga', detail: 'fugafuga', isFinished: true },
]


app.get('/', function (req, res) {
  const indexPageHtml = ReactDOMServer.renderToString(React.createElement(IndexPage, { initItems: mockDB }, null))
  console.log(indexPageHtml);

  res.send(`
  <html>
    <head>
      <title>My SSR Practice</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify({ todos: mockDB })}'>${indexPageHtml}</div>
      <script src="client.js"></script>
    </body>
  </html>`)
})


app.use(express.static('dist/public'))
app.listen(3000)