import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import Router from "../Routers/Router";
import { UserProvider } from "../Providers/UserProvider";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Reset />
          <Router />
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
