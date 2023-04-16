import React, { FC } from "react";
import styled from "styled-components";

const Loading: FC<Props> = ({ progress, isVisible }) => {

  return (
    <Container progress={progress} isVisible={isVisible} >
      <div className="contentsWrapper">
        <h1 className="progressLabel">{progress.toString()}<span className="per">%</span></h1>
        <div className="progressBar"/>
      </div>
    </Container>
  );
};

export default Loading;

// interface

interface Props{
    progress: number,
    isVisible: boolean,
}

// styled components
const Container = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${props => { return props.isVisible ? 1000 : -1}};
  transition: 1.3s;
  transition-delay: 0.6s;
  opacity: ${props => { return props.isVisible ? 1 : 0}};
  background-color: white;

  .contentsWrapper {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    width: 100%;
    height: 100%;

    .progressLabel {
      font-size: 3rem;
      text-align: center;
      color: ${(props) => {
       return `rgba(${props.progress} ${props.progress} ${props.progress})`
      }};
    }

    .progressBar{
        height: 50px;
        width: 50%;
        border: 0.4px solid #000000;
        border-radius: 25px;
        background-color: transparent;
        position: relative;
        overflow: hidden;

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: ${props => { return `${props.progress}%`}};
            height: 100%;
            background-color: #61456f;
            
        }
    }
  }
`;
