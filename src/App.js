import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import ChangePassword from "./components/dashboard/Login/ChangePassword";
import Header from "./components/dashboard/Developer/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import LeftNavigation from "./components/dashboard/Navigation/LeftNavigation";
import ProjectModal from "./components/dashboard/Developer/FindProjects/ProjectModal";

const AppContainer = styled.div`
  .essential-container {
    display: flex;
    height: 100vh;
  }

  .main-app-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .main-app-column {
      background: transparent linear-gradient(297deg, #f2f3ff 0%, #ffffff 100%)
        0% 0% no-repeat padding-box;
      height: 100%;
      .developer-home {
        padding: 11.5625em 7.125em 7em 6.625em;
        
      }
    }
  }
`;
const App = props => {
  return (
    <>
            <Route path="/dev/find/projects/:id" component={ProjectModal} />

      <AppContainer>
        <div className="essential-container">
          <Route path="/dev" component={LeftNavigation} />
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
