import dotenv from 'dotenv'
import http from 'http'
import app from './app'
import { startServer } from './socket'

dotenv.config()
const SERVER_PORT = process.env.SERVER_PORT
const server = http.createServer(app)
startServer(server)

server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`)
})
