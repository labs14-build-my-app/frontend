import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/dashboard/Login/Login";
import Signup from "./components/dashboard/Login/Signup";
import Signup2 from "./components/dashboard/Login/Signup2";
import ChangePassword from "./components/dashboard/Login/ChangePassword";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import Header from "./components/dashboard/Developer/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import LeftNavigation from "./components/dashboard/Navigation/LeftNavigation";
import { useSelector } from "react-redux";
const AppContainer = styled.div`
  ${props =>
    props.theme.history.location.pathname.startsWith("/dev") && "height: 100%"};
  .essential-container {
    display: flex;
    height: 100%;
  }

  .main-app-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .main-app-column {
      background: transparent linear-gradient(297deg, #f2f3ff 0%, #ffffff 100%);
      .developer-home {
        padding: 11.5625em 7.125em 7em 6.625em;
      }
    }
  }
`;
const App = props => {
  console.log(props);

  return (
    <ThemeProvider theme={props}>
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup2" component={Signup2} />
      <Route exact path="/changepassword" component={ChangePassword} />

      <AppContainer>
        <Route path="/dev" render={() => {
          return (
            <>
              <div className="essential-container">
                <LeftNavigation />
                <div className="main-app-container">
                  <Route path="/dev" component={Header} />
                  <PrivateRoute path="/" component={DevFindr} />
                </div>
              </div>
            </>
          );
        }} />
      </AppContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
