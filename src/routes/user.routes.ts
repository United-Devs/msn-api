import { Router, Request, Response } from 'express'

const router = Router()

router.get('/users', (req: Request, res: Response): void => {
  let users = ['Goku', 'Gohan', 'Vegeta']
  res.json({ users })
})

export { router }
