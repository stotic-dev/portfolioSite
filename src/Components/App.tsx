import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import Router from "../Routers/Router";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Reset />
      <Router />
    </BrowserRouter>
    </>
  );
};
