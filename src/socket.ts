import dotenv from 'dotenv'
import { Socket, Server } from 'socket.io'

dotenv.config()
const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN

export function startServer(server: any) {
  const io = new Server(server, {
    cors: {
      origin: CLIENT_DOMAIN,
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket: Socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)

    socket.on('addNewUser', (userName: string) => {
      io.emit('userAdded', userName)
    })
  })

  io.on('disconnect', (socket: Socket) => {
    console.log('🔥: A user disconnected')
  })

  return io
}
