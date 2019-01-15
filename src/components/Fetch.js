import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Fetch extends Component {
    state = {
        error: null,
        data: [],
        loading: true,
    }

    static propTypes = {
        endpoint: PropTypes.string.isRequired,
    }

    componentDidMount() {
        this.fetchEmployees()
            .catch(error => {
                console.log(error)
                return { error: error.message }
            })
            .then(data => {
                if (data.error) {
                    this.setState({ error: data.error, loading: false })
                } else {
                    this.setState({ data, loading: false })
                }
            })
    }

    fetchEmployees = async () => {
        const { endpoint } = this.props
        const response = await (await fetch(endpoint)).json()
        return response
    }

    render() {
        const { children } = this.props
        return children({ ...this.state })
    }
}
