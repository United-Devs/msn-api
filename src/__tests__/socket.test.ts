import http from 'http'
import * as ioClient from 'socket.io-client'
import app from '../app'
import { startServer } from '../socket'

describe('Chat server', () => {
  let server: http.Server
  let client: ioClient.Socket

  beforeEach(done => {
    server = http.createServer(app)
    startServer(server)

    server.listen(3000, () => {
      client = ioClient.connect('http://localhost:3000')
      client.on('connect', () => {
        done()
      })
    })
  })

  afterEach(done => {
    client.disconnect()
    server.close(done)
  })

  it('should broadcast userName when new user added', done => {
    const userName = 'Clayton Rafael'

    client.on('userAdded', receivedUserName => {
      expect(receivedUserName).toBe(userName)
      done()
    })

    client.emit('addNewUser', userName)
  })
})
