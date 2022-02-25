import IndexPage from '../client/pages';
import express from 'express'
import ReactDOMServer from 'react-dom/server';
const app = express()

app.get('/', function (req, res) {
  const indexPageHtml = ReactDOMServer.renderToString(IndexPage)
  console.log(indexPageHtml);

  res.send(indexPageHtml)
})

app.listen(3000)