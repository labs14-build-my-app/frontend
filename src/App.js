import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import Header from "./components/dashboard/Developer/Header/Header";
import styled from "styled-components"
const AppContainer = styled.div`
  display: flex
  .main-app-container{
    display: flex;
    flex-direction: column;

    .main-app-column{
      background: transparent linear-gradient(297deg, #F2F3FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
      padding: 11.5625em 4.3125em 7em 6.625em;
    }
  }
`
const App = () => {
  return (
    <>
      <AppContainer>

        <div className="main-app-container">
        <Route path="/" component={Header} />
        <PrivateRoute path="/" component={DevFindr} />
        </div>
      </AppContainer>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      
    </>
  );
};


export default App
