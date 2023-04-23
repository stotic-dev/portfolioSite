import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../styledComponents/WrapperStyled";
import { useInView } from "react-intersection-observer";

export const HeaderComponent = () => {

  return (
    <WrapperContainer >
      <Container >
        <h3 className="header-title">Taichi-Code</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </WrapperContainer>
  );
};

// styled components
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-title {
    font-size: 1.7rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: center;
    column-gap: 10px;

    li a {
      transition: 0.4s;
    }
  }

  a:hover {
    color: #a2a1a1;
    opacity: 0.8;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;

    .header-title {
      margin-bottom: 25px;
      text-align: center;
    }

    ul {
      column-gap: 30px;
    }
  }
`;
