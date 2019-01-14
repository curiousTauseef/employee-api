import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pagination extends Component {
    state = {}

    static propTypes = {
        /* eslint-disable react/no-unused-prop-types */
        perPage: PropTypes.number.isRequired,
        /* eslint-disable react/no-unused-prop-types */
        data: PropTypes.instanceOf(Array).isRequired,
    }

    static getDerivedStateFromProps(nextProps) {
        const { perPage, data } = nextProps
        const pageCount = Math.ceil(data.length / perPage)
        return {
            perPage,
            pageCount,
        }
    }

    render() {
        return <div>Pagination</div>
    }
}
