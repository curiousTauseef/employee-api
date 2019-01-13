import request from 'supertest'
import { app } from '../../expressApp'

const getUrl = '/api/employees'

describe('Server', () => {
    it('Should respond to GET', async () => {
        const response = await request(app).get(getUrl)
        expect(response.statusCode).toBe(200)
    })
})
