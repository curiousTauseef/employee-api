import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Employee from '../components/Employee'
import { mockData } from '../lib/testUtils'

describe('<Employee/>', () => {
    it('Should render an employee', () => {
        const wrapper = shallow(<Employee employee={mockData[0]} />)
        expect(wrapper.find('h2').text()).toEqual(mockData[0].name)
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})
