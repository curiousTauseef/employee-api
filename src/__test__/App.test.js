import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('<App/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
        const title = wrapper.find('h1')
        expect(title.text()).toContain('Edit')
    })
})
