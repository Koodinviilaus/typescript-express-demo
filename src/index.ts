import express from 'express'
import { getRootResponse } from './handlers/root'

const app = express()
const port = 8080

app.get('', (request, response) => {
  const rootResponse = getRootResponse()
  response.send(rootResponse)
})

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(
    `server started on localhost port ${port}. http://localhost:${port}`
  )
)
