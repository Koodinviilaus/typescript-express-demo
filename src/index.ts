import express from 'express'
import { getRootResponse } from './handlers/root'

const app = express()
const port = 8080

const rootResponse = getRootResponse()

app.get('', (request, response) => {
  response.send('<p>' + rootResponse + '</p>')
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server started on localhost port ${port}`))
