/* eslint import/prefer-default-export: 0 */

const express = require('express')

const app = express()

app.get('/api/employees', (request, response) => {
    // should return list of employees
    response.send('hello world')
})

export { app }
