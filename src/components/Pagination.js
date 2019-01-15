import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pagination extends Component {
    state = {
        currentPage: 1,
    }

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

    next = () => {
        const { currentPage, pageCount } = this.state
        if (currentPage < pageCount) {
            this.setState(
                prevState => ({
                    currentPage: prevState.currentPage + 1,
                }),
                () => {
                    console.log(currentPage)
                }
            )
        }
    }

    prev = () => {
        const { currentPage } = this.state
        if (currentPage > 1) {
            this.setState(
                prevState => ({
                    currentPage: prevState.currentPage - 1,
                }),
                () => {
                    console.log(currentPage)
                }
            )
        }
    }

    render() {
        const { currentPage, pageCount } = this.state
        const { children } = this.props
        return (
            <div>
                <button
                    className="prev"
                    type="button"
                    onClick={this.prev}
                    disabled={currentPage <= 1}
                >
                    PREV
                </button>
                <span>
                    Showing page {currentPage} of {pageCount}
                </span>
                <button
                    className="next"
                    type="button"
                    onClick={this.next}
                    disabled={currentPage >= pageCount}
                >
                    NEXT
                </button>
                {children({ ...this.state })}
            </div>
        )
    }
}
