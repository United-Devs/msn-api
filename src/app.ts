import express, { Application, Request, Response } from 'express'
import { router as userRoutes } from './routes/user.routes'
import cors from 'cors'

const app: Application = express()

app.use('/', userRoutes)
app.use(cors())

app.use('/', (req: Request, res: Response): void => {
  res.json({ message: 'All right' })
})

export default app
