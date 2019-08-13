import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import Navigation from "./components/dashboard/Navigation/Navigation";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";
import ChangePassword from "./components/dashboard/Login/ChangePassword";

const App = () => {
  return (
    <>
      <Route path="/" component={Navigation} />
      <PrivateRoute path="/" component={DevFindr} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/changepassword" component={ChangePassword} />
    </>
  );
};


export default App
