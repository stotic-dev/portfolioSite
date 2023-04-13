import React from "react";
import styled from "styled-components";

export const TitleAndArticle = () => {
  return (
    <Container>
      <h1 className="title">About Me</h1>
      <p className="line sub-title">web developer & mobile app developer</p>
      <div className="line article">
        <p>Hello I am web engneer.</p>
        <p>please my skill from below</p>
        <p>javascript & typescript: 3 month of development experience</p>
        <p>react: 2 month of development experience</p>
        <p>webpack: 3 month of development experience</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title{
    font-size: 3.0rem;
    font-weight: 300;
    margin-bottom: 60px;
  }

  .sub-title{
    font-size: 1.7rem;
    font-weight: 100;
    color: #5a5a5a;
  }

  .line{
    margin-bottom: 15px;
  }

  .article{
    font-size: 1.4rem;
    color: #d2d2d2;
  }
`;
