import React from 'react'
import styled from 'styled-components'

export const FooterComponent = () => {
  return (
    <Container>
      <h3 className="footer-title">Taichi-Code</h3>
      <p className="copy">© 2023 Taichi-Code All rights reserved.</p>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: #4a4a4a;
  color: #fff;

  .footer-title{
    font-size: 1.5rem;
  }

  .copy{
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;