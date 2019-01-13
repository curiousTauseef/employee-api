import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import '../App.css'
import Fetch from './Fetch'

const Wrapper = styled.div`
    text-align: center;
`
const App = () => (
    <Wrapper>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Edit <code>src/App.js</code> and save to reload.
            </h1>
        </header>
        <main>
            <Fetch>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>{error}</p>
                    return (
                        <div>
                            {data.map(employee => (
                                <p key={employee.uuid}>{employee.name}</p>
                            ))}
                        </div>
                    )
                }}
            </Fetch>
        </main>
    </Wrapper>
)

export default App
