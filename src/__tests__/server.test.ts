import request from 'supertest'
import app from '../app'

describe('Server', () => {
  describe('/', () => {
    it('should be responds with status 200', async () => {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
    })
  })

  describe('/users', () => {
    it('should be return list of users', async () => {
      const response = await request(app).get('/users')
      const data = response.body
      expect(data.users.length).toBeGreaterThanOrEqual(0)
    })
  })
})
