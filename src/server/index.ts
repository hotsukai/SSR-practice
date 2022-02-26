import express from 'express'
import mockDB from './mockDB';
import createHtml from './renderer';
const app = express()

app.use('/public', express.static('dist/public'));

app.get('/api/todo', function (req, res) {
  console.info('/api/todo/ called');

  res.json(mockDB.findAll())
})
app.get('/api/todo/:id', function (req, res) {
  res.json(mockDB.find(req.params.id))
})

app.get('/*', async (req, res) => {
  const pageHtml = await createHtml({ url: req.url })

  res.send(pageHtml)
})

app.get('/ssg', function (req, res) {
  res.sendFile(`${__dirname}/public/ssg/ssg.html`)
})


app.listen(3000)