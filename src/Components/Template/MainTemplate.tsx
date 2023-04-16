import styled from "styled-components";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  headerChild: ReactNode;
  mainChild: ReactNode;
  footerChild: ReactNode;
}

export const MainTemplate: FC<Props> = ({
  headerChild,
  mainChild,
  footerChild,
}) => {
  // hooks
  const [headerRef, inView] = useInView({
    delay: 0.6,
    rootMargin: "20px",
  });

  return (
    <TemplateBody>
      <header className="main" ref={headerRef}>
        {headerChild}
      </header>
      <header className={`sub${inView ? "" : " show"}`}>{headerChild}</header>
      <div className="container">{mainChild}</div>
      <footer>{footerChild}</footer>
    </TemplateBody>
  );
};

// styled components
const TemplateBody = styled.div`
  width: 100%;
  font-family: "Sawarabi Mincho", serif;

  // reset
  a {
    text-decoration: none;
    color: #000000;
  }

  header {
    background-color: #f0f0f0;

    &.main {
      height: 170px;
    }

    &.sub {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      transition: all 1s;
      opacity: 0;
      display: none;
      z-index: 5;

      &.show {
        display: block;
        opacity: 0.8;
      }
    }
  }

  .container {
    background-color: #f0f0f0;
  }

  footer {
    height: 150px;
    background-color: #f0f0f0;
  }
`;
