import { Component } from 'react'

export default class Fetch extends Component {
    state = {
        error: null,
        data: [],
        loading: true,
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
        const url = 'http://localhost:8000/api/employees'
        const response = await (await fetch(url)).json()
        return response
    }

    render() {
        const { children } = this.props
        return children({ ...this.state })
    }
}
