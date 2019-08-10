import React, { useEffect } from "react";
import "./index.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import dashboard from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import { connect } from "react-redux";
import { getUserinfo } from "./actions";

const App = ({ currentUser, getUserinfo, history }) => {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      getUserinfo();
    } else {
      history.push("/dev/dashboard");
    }
  }, [getUserinfo, history]);

  const localUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {localUser === null ? (
        <Redirect to="/login" />
      ) : localUser.isDeveloper ? (
        <PrivateRoute exact path="/dev/dashboard" component={dashboard} />
      ) : localUser.isDeveloper === false ? (
        <PrivateRoute
          exact
          path="/entrepreneur/dashboard"
          component={dashboard}
        />
      ) : null}

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {/* {currentUser !== undefined && currentUser.isDeveloper ? (
        <PrivateRoute path="/entrepreneur" component={dashboard} />
      ) : (
        <PrivateRoute path="/dev" component={dashboard} />
      )} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.getUserInfo.currentUser
  };
};
export default connect(
  mapStateToProps,
  { getUserinfo }
)(App);
