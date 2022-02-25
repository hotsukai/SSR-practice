import { IndexPage } from '../client/pages';
import React from "react";
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import mockDB from './mockDB';
import createHtml from './helper';
import { ToDoItem } from 'app';
const app = express()




app.get('/ssr', function (req, res) {
  const indexPageHtml = createHtml<{ todos: ToDoItem[] }>({ title: "My SSR Practice", pageComponent: IndexPage, props: { todos: mockDB } })
  res.send(indexPageHtml)
})



app.use(express.static('dist/public'))
app.listen(3000)