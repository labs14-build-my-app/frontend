import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import Header from "./components/dashboard/Developer/Header/Header";

const App = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <PrivateRoute path="/" component={DevFindr} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
};


export default App
