import express, { Request } from 'express'
import routes, { PageProps } from 'routes';
import renderHtml from './renderer';

const app = express()

app.use('/public', express.static('dist/public'));

Object.keys(routes).forEach(key => {
  const route = routes[key] as PageProps

  app.get(route.path, async (req, res) => {
    const pageData = await route.getServerSideProps(req)
    const pageHtml = await renderHtml({ url: req.url, pageData })
    res.send(pageHtml)
  })
  app.get(`/api${route.path}`, async (req, res) => {
    const pageData = await route.getServerSideProps(req)
    res.json(pageData)
  })
})

app.get('/*', async (req, res) => {
  res.send("Page NotFound")
})

app.listen(3000)