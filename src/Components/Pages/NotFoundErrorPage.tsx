import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundErrorPage = () => {
  return (
    <Container>
        <h1>Not Found Error : 404</h1>
        <Link className='link' to={'/'}>ホームに戻る</Link>
    </Container>
  )
}

export default NotFoundErrorPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #525252;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 3rem;
        text-align: center;
        margin-bottom: 20px;
    }

    .link{
        text-decoration: none;
        color: #fff;
        display: block;
    }
`