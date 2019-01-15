import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import logo from '../img/logo.svg'
import Fetch from './Fetch'
import Employee from './Employee'
import Pagination from './Pagination'
import theme from '../theme'
import GlobalStyle from './GlobalStyle'

const Wrapper = styled.div`
    text-align: center;
`

const Header = styled.header`
    margin: 40px 0;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 20px 20px 20px;
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
                <Fetch>
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
                                <p>Showing {data.length} results</p>
                                <Pagination data={data} perPage={100}>
                                    {({ currentPage }) => (
                                        <div>
                                            SOME CHILD THING {currentPage}
                                        </div>
                                    )}
                                </Pagination>
                                <List>
                                    {data.map(employee => (
                                        <Employee
                                            key={employee.uuid}
                                            employee={employee}
                                        />
                                    ))}
                                </List>
                            </div>
                        )
                    }}
                </Fetch>
            </Main>
        </Wrapper>
    </ThemeProvider>
)

export default App

// <Pagination data={data}>
// {({
//     perPage,
//     pageCount,
//     currentPage,
//     next,
// }) => (
//     <div>
//         <p>perPage: {perPage}</p>
//         <p>pageCount: {pageCount}</p>
//         <p>currentPage: {currentPage}</p>
//         <button onClick={next}>NEXT</button>
//     </div>
// )}
// </Pagination>
