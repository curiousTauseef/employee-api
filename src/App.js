import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

const Wrapper = styled.div`
    text-align: center;
`

class App extends Component {
    render() {
        return (
            <Wrapper>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Edit <code>src/App.js</code> and save to reload.
                    </h1>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </Wrapper>
        )
    }
}

export default App
