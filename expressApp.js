/* eslint import/prefer-default-export: 0 */

const express = require('express')
const fetch = require('fetch-retry')

const app = express()
const url = 'http://hiring.rewardgateway.net/list'
const headers = {
    method: 'GET',
    retries: 3,
    retryOn: [500],
    retryDelay: 1000,
    headers: {
        Authorization: 'Basic aGFyZDpoYXJk',
        Accept: 'application/json',
    },
}

app.set('getEmployees', async () => {
    const response = await fetch(url, headers)
        .then(res => {
            console.log(res.status, res.ok)
            if (!res.ok) {
                throw new Error('There seems to be a problem...')
            }
            return res.json()
        })
        .catch(err => {
            console.log(err)
            return { error: err.message }
        })
    return response
})

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.get('/api/employees', (_req, res) => {
    app.get('getEmployees')()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = app
