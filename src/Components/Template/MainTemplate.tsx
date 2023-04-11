import styled from "styled-components"
import { HeaderComponent } from '../Molcule/HeaderComponent'
import { MainComponent } from "../Molcule/MainComponent";
import { FooterComponent } from "../Molcule/FooterComponent";
import { FC, ReactNode } from "react";

interface Props{
    headerChild: ReactNode;
    mainChild: ReactNode;
    footerChild: ReactNode;
}

export const MainTemplate: FC<Props> = ({headerChild, mainChild, footerChild}) => {
  return (
    <TemplateBody>
        <header>
            {headerChild}
        </header>
        <div className="container">
            {mainChild}
        </div>
        <footer>
            {footerChild}
        </footer>
    </TemplateBody>
  )
}

const TemplateBody = styled.div`
    width: 100%;
    font-family: 'Sawarabi Mincho', serif;

    // reset
    a{
        text-decoration: none;
        color: #000000;
    }

    header{
        height: 170px;
        background-color: #f0f0f0;
    }

    .container{
        background-color: #f0f0f0;
    }

    footer{
        height: 150px;
        background-color: #f0f0f0;
    }
`;

