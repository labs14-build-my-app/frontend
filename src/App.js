import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import Login from "./components/Dashboard/Authentication/Login/Login";
import ChangePassword from "./components/Dashboard/Authentication/ChangePassword";

import Signup from "./components/Dashboard/Authentication/SignUp/Signup";
import Signup2 from "./components/Dashboard/Authentication/SignUp/Signup2";

import DashboardChooser from "./components/Dashboard/AccountTypes/DashboardChooser";


import Header from "./components/Dashboard/Developer/Header/Header";
import LeftNavigation from "./components/Dashboard/Navigation/LeftNavigation";

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
        <Route
          path="/dev"
          render={() => {
            return (
              <>
                <div className="essential-container">
                  <LeftNavigation />
                  <div className="main-app-container">
                    <Route path="/dev" component={Header} />
                    <PrivateRoute path="/" component={DashboardChooser} />
                  </div>
                </div>
              </>
            );
          }}
        />
      </AppContainer>
      </>
    </ThemeProvider>
  );
};

export default App;

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
