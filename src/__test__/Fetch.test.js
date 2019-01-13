import React from 'react'
import { mount } from 'enzyme'
import wait from 'waait'
import App from '../components/App'
import Fetch from '../components/Fetch'
import { mockData } from '../lib/testUtils'

describe('<Fetch />', () => {
    it('Renders employee data and matches snapshot', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => mockData,
        })
        const wrapper = mount(<App />)
        await wait()
        wrapper.update()
        const fetchComponent = wrapper.find(Fetch)
        expect(global.fetch).toHaveBeenCalled()

        expect(fetchComponent).toMatchSnapshot()
        global.fetch.mockReset()
    })
})
