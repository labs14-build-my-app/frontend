import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import ChangePassword from "./components/dashboard/Login/ChangePassword";
import Header from "./components/dashboard/Developer/Header/Header";
import styled from "styled-components";
import LeftNavigation from "./components/dashboard/Navigation/LeftNavigation";
const AppContainer = styled.div`
height: 100%;
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
  return (
    <>
      <AppContainer>
        <div className="essential-container">
          {/* <Route path="/dev" component={LeftNavigation} /> */}
          <div className="main-app-container">
            <Route path="/dev" component={Header} />
            <PrivateRoute path="/" component={DevFindr} />
            {/* <Route path="/" component={LeftNavigation}/> */}
          </div>
        </div>
      </AppContainer>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/changepassword" component={ChangePassword} />
    </>
  );
};

export default App;
