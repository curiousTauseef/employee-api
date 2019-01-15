import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import logo from '../img/logo.svg'
import Fetch from './Fetch'
import Employee from './Employee'
import Pagination from './Pagination'
import theme from '../theme'
import GlobalStyle from '../styles/GlobalStyle'

const Wrapper = styled.div`
    text-align: center;
`

const Header = styled.header`
    margin: 40px 0;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 20px 40px 20px;
    text-align: left;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
`

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Loading = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        animation: ${spinner} infinite 2s linear;
        width: 50px;
        display: block;
    }
`

const Main = styled.main`
    max-width: 768px;
    margin: 0 auto;
`

const App = () => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <GlobalStyle />
            <Header>
                <h1>Employee List</h1>
            </Header>
            <Main>
                <Fetch endpoint="http://localhost:8000/api/employees">
                    {({ data, error, loading }) => {
                        if (loading)
                            return (
                                <Loading>
                                    <span>
                                        <img src={logo} alt="Spinner" />
                                    </span>
                                    <span>Loading...</span>
                                </Loading>
                            )
                        if (error) return <p>{error}</p>
                        return (
                            <div>
                                <Pagination data={data} perPage={10}>
                                    {({ pageData }) => (
                                        <List>
                                            {pageData.map(employee => (
                                                <Employee
                                                    key={employee.uuid}
                                                    employee={employee}
                                                />
                                            ))}
                                        </List>
                                    )}
                                </Pagination>
                            </div>
                        )
                    }}
                </Fetch>
            </Main>
        </Wrapper>
    </ThemeProvider>
)

export default App
