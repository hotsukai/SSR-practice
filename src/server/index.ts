import { IndexPage, IndexPageProps } from '../client/pages';
import express from 'express'
import mockDB from './mockDB';
import createHtml from './helper';
import { ToDoItem } from 'app';
const app = express()




app.get('/ssr', function (req, res) {
  const indexPageHtml = createHtml<IndexPageProps>({ title: "My SSR Practice", pageComponent: IndexPage, props: { todos: mockDB, pagename: 'ssr' }, url: req.url })
  res.send(indexPageHtml)
})

app.get('/ssg', function (req, res) {
  res.sendFile(`${__dirname}/public/ssg/ssg.html`)
})



app.use(express.static('dist/public'))
app.listen(3000)