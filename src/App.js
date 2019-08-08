import React, { useEffect } from "react";
import "./index.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import dashboard from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import { connect } from "react-redux";
import { getUserinfo } from "./actions";
import { BeatLoader } from "react-spinners";

const App = props => {
  const { currentUser, getUserinfo } = props;
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser && localStorage.getItem("token")) {
      getUserinfo();
    }
  }, [currentUser, getUserinfo]);

  console.log(currentUser);
  console.log(props);
  console.log(localStorage.getItem("user"));
  console.log("HELLLLLLLLLLLLLOOOOOOOOOOOOOOOOOO");
  console.log("test");
  return (
    <div>
      {/* renders nav bar for devs */}

      {currentUser === null ? (
        <Redirect to="/login" />
      ) : currentUser.isDeveloper ? (
        <PrivateRoute path="/dev" component={dashboard} />
      ) : currentUser.isDeveloper === false ? (
        <PrivateRoute path="/entrepreneur" component={dashboard} />
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
  console.log(state);
  return {
    currentUser: state.getUserInfo.currentUser
  };
};
export default connect(
  mapStateToProps,
  { getUserinfo }
)(App);
