import express from 'express'
import { getRootResponse } from './handlers/root'

const app = express()
const port = 8080

const rootResponse = getRootResponse()

app.get('', (request, response) => {
  response.send(rootResponse)
})

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server started on localhost port ${port}. http://localhost:8080`)
)
