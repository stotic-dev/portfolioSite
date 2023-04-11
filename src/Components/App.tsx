import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import { FooterComponent } from "./Molcule/FooterComponent";
import { HeaderComponent } from "./Molcule/HeaderComponent";
import { MainComponent } from "./Molcule/MainComponent";
import { MainTemplate } from "./Template/MainTemplate";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Reset />
      <MainTemplate
        headerChild={<HeaderComponent />}
        mainChild={<MainComponent />}
        footerChild={<FooterComponent />}
      />
    </BrowserRouter>
    </>
  );
};
