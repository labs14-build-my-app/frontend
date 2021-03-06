import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import Login from "./components/Dashboard/Authentication/Login/Login";
import ChangePassword from "./components/Dashboard/Authentication/ChangePassword.js";

import Signup from "./components/Dashboard/Authentication/SignUp/Signup";
import Signup2 from "./components/Dashboard/Authentication/SignUp/Signup2";

import DashboardChooser from "./components/Dashboard/AccountTypes/DashboardChooser";

import TopNavigation from "./components/Dashboard/Navigation/TopNavigation";
import LeftNavigation from "./components/Dashboard/Navigation/LeftNavigation";
import { mainAppGradient } from "./components/Dashboard/cssVariables";

const App = props => {
  console.log(props);

  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup2" component={Signup2} />
      <Route exact path="/changepassword" component={ChangePassword} />
      
      <AppContainer>
        <Route path="/" render={() => {
          return (
            <>
              <FlexWrapper>
                <LeftNavigation />
                <EssentialContainer>
                  <TopNavigation {...props} />
                  <PrivateRoute path="/" component={DashboardChooser} />
                </EssentialContainer>
              </FlexWrapper>
            </>
          );
        }} />

      </AppContainer>
      </>
  );
};

export default App;

const AppContainer = styled.div`
  height: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
`
const EssentialContainer = styled.div`
  flex-grow: 1;
  justify-content: stretch;
  height: 100%;
  ${mainAppGradient};
`
