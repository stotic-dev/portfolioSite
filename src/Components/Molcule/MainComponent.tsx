import { TitleAndArticle } from "../Orgazm/TitleAndArticle";
import { WrapperContainer } from "../styledComponents/WrapperStyled";
import React, { FormEvent, useEffect } from "react";
import styled from "styled-components";
import mainImage from "../../Assets/Img/programmer-scanning-screen-his-smartwatch-with-smartphone-camera.jpg";
import profIconImage from "../../Assets/Img/myProfileIcon.jpg";
import { Link } from "react-router-dom";
import { InputEmail } from "../Orgazm/InputEmail";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export const MainComponent = () => {

  // hooks
  const userInViewOptions: IntersectionOptions = {
    triggerOnce: true,
  }
  const [aboutRef, aboutInView] = useInView({
    ...userInViewOptions,
  });
  const [blogRef, blogInView] = useInView({
    ...userInViewOptions,
  });
  const [contactRef, contactInView] = useInView({
    ...userInViewOptions,
  });

  const submitAction = (e: FormEvent) => {
    console.log("clicked submit button");
  }

  return (
    <Container>
      <section className='main'>
        <h1>No Code No Life</h1>
        <img className="main-image" src={mainImage} alt="main-image" />
      </section>
      <InViewSection className="about" ref={aboutRef} inView={aboutInView}>
        <WrapperContainer>
          <AboutContainer>
            <div className="iconWrapper">
              <img src={profIconImage} alt="profile Image" />
            </div>
            <TitleAndArticle />
          </AboutContainer>
        </WrapperContainer>
      </InViewSection>
      <InViewSection className="blog" ref={blogRef} inView={blogInView}>
        <WrapperContainer>
          <BlogConttainer>
            <h1 className="blog-title">Go to Blog</h1>
            <h3 className="sub-title">this is tech blog. Let`s go!</h3>
            <StyleLinkButton><Link to="/">Blog</Link></StyleLinkButton>
          </BlogConttainer>
        </WrapperContainer>
      </InViewSection>
      <InViewSection className="contact" ref={contactRef} inView={contactInView}>
        <WrapperContainer>
          <ContactContainer>
            <h1 className="contact-title">Contact Me</h1>
            <InputEmail submitAction={submitAction} />
          </ContactContainer>
        </WrapperContainer>
      </InViewSection>
    </Container>
  );
};

// interface
interface Props{
  inView: boolean;
}


// styled Components
const Container = styled.div`
  width: 100%;

  .main {
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    h1 {
      text-align: center;
      color: #fff;
      position: absolute;
      font-size: 4rem;
      font-weight: 1000;
      z-index: 2;
    }

    .main-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1p;
    }
  }

  .about {
    padding:60px 0;
    margin-top: auto;
    margin-bottom: auto;
    min-height: 400px;

    @media (max-width: 960px){
      padding:30px 0;
  }
  }

  .blog{
    padding:60px 0;
    background-color: #4a4a4a;
    margin-top: auto;
    margin-bottom: auto;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact{
    padding: 60px 0;
    margin-top: auto;
    margin-bottom: auto;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes feedIn {
    0% {
      opacity: 0;
      transform: translateY(150%);
    }
    100% {
      opacity: 1;
    }
  }
`;

const AboutContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  .iconWrapper {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 960px){
    flex-direction: column;

    .iconWrapper{
      margin-bottom: 60px;
    }
  }
`;

const BlogConttainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  .blog-title{
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .sub-title{
    font-size: 1.4rem;
    font-weight: normal;
    margin-bottom: 15px;
  }

`;

const StyleLinkButton = styled.div`
  width: fit-content;
  padding: 15px 40px;
  background-color: #b0cc9a;
  border-radius: 30px;
  box-shadow: 10px 10px 10px 0 #3a3a3aa2;
  transition: 0.4s;
  color: #fff;

  &:hover{
    opacity: 0.7;
    box-shadow: none;
    transform: translate(5px, 5px);
  }
`;

const ContactContainer = styled.div`
  .contact-title{
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 60px;
  }
`;

const InViewSection = styled.section<Props>`
  transition: 0.7s;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0.5)};
`