import React from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import { connect } from "react-redux";
import Navigation from "./components/dashboard/Navigation/Navigation";
import DevFindr from "./components/dashboard/DevFindr/DevFindr";

const App = ({ history, currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Route path="/" component={Navigation} />
      <PrivateRoute
        path="/"
        component={DevFindr}
        developer={currentUser && currentUser.isDeveloper}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(App);
