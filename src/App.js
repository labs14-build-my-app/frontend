import React, { useEffect } from "react";
import "./index.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import dashboard from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/dashboard/Login/Signup";
import { connect } from "react-redux";
import Navigation from "./components/dashboard/Navigation/Navigation";
import { DeveloperBoard } from "./components/dashboard/EntrepreneurDevList/DeveloperBoard";

// import { getUserinfo } from "./actions";

const App = ({ history }) => {

  const [currentUser, setUser] = React.useState( JSON.parse(localStorage.getItem("user")))
  console.log(currentUser)
  return (
    <div>
     <Route path="/" component={Navigation} />
     <PrivateRoute path="/dev" component={dashboard} developer={currentUser && currentUser.isDeveloper} />
     <PrivateRoute
          path="/entrepreneur"
          component={DeveloperBoard}
          developer={currentUser && currentUser.isDeveloper}
        />
      {currentUser === null ? (
        <Redirect to="/login" />
      ) : currentUser && currentUser.isDeveloper ? (
       <Redirect to="/dev/dashboard" />
      ) : currentUser && currentUser.isDeveloper === false ? (
       <Redirect to="/entrepreneur" />
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
  { }
)(App);
