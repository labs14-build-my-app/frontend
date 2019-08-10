import React, { useEffect } from "react";
import "./index.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import { connect } from "react-redux";
import Navigation from "./components/dashboard/Navigation/Navigation";

// import { getUserinfo } from "./actions";

const App = ({ history }) => {

  const [currentUser, setUser] = React.useState( JSON.parse(localStorage.getItem("user")))
  console.log(currentUser)
  return (
    <div>
     <Route path="/" component={Navigation} />
     <PrivateRoute path="/" component={} developer={currentUser && currentUser.isDeveloper} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />


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
  { }
)(App);
