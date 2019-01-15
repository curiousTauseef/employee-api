import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../components/Pagination'
import { mockData } from '../lib/testUtils'

describe('<Pagination />', () => {
    it('Should disable prev on the first page', () => {
        const wrapper = shallow(
            <Pagination data={mockData} perPage={1}>
                {() => null}
            </Pagination>
        )
        expect(wrapper.find('button.prev').prop('disabled')).toEqual(true)
    })

    it('Should disable next on the last page', () => {
        const wrapper = shallow(
            <Pagination data={mockData} perPage={1}>
                {() => null}
            </Pagination>
        )
        wrapper.setState({ currentPage: 3 })

        expect(wrapper.find('button.next').prop('disabled')).toEqual(true)
    })

    it('Should enable all buttons on a middle page', () => {
        const wrapper = shallow(
            <Pagination data={mockData} perPage={1}>
                {() => null}
            </Pagination>
        )
        wrapper.setState({ currentPage: 2 })
        expect(wrapper.find('button.prev').prop('disabled')).toEqual(false)
        expect(wrapper.find('button.next').prop('disabled')).toEqual(false)
    })
})
