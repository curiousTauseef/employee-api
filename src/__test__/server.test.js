import request from 'supertest'
import app from '../../expressApp'

const getUrl = '/api/employees'
const mockData = [
    {
        uuid: 'fa43bf60-faeb-36bb-9968-968f8ed64c1d',
        company: 'Streich PLC',
        bio: '',
        name: 'Benjamin Shields',
        title: 'Real Estate Sales Agent',
        avatar: 'http://httpstat.us/503',
    },
]
const mockSuccess = jest.fn().mockResolvedValue(mockData)

const mockErrorMessage = 'There is an error with the api'

const mockError = jest.fn().mockImplementation(() => {
    try {
        throw new Error(mockErrorMessage)
    } catch (error) {
        return Promise.resolve({ error: error.message })
    }
})

describe('Server', () => {
    it('Should successfully respond to GET', async () => {
        app.set('getEmployees', mockSuccess)
        const response = await request(app).get(getUrl)
        expect(response.statusCode).toBe(200)
        expect(mockSuccess).toHaveBeenCalled()
    })

    it('Should return array of users if response ok', async () => {
        app.set('getEmployees', mockSuccess)
        const response = await request(app).get(getUrl)
        expect(response.body).toEqual(expect.arrayContaining(mockData))
    })

    it('Should return an error message if response not ok', async () => {
        app.set('getEmployees', mockError)
        const response = await request(app).get(getUrl)
        expect(response.body.error).toEqual(mockErrorMessage)
    })
})
