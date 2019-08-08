import React, {useEffect} from "react";
import "./index.css";
import {Route} from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import dashboard from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute"
import Navigation from "./components/dashboard/Navigation/Navigation"
import Signup from "./components/dashboard/Login/Signup";
import {connect} from "react-redux";
import {getUserinfo} from "./actions"

const App = (props) => {
  const {currentUser} = props;
  // useEffect(
  //   () => {
  //     props.getUserinfo();
  //   },
  //   [props.currentUser]
  // )
  console.log(currentUser)
  return (
    <div>

    {/* renders nav bar for devs */}
    <Route path="/" component={Navigation}/>

    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup} />
    {currentUser !== undefined && currentUser.isDeveloper ?   <PrivateRoute path="/entrepreneur" component={dashboard} /> : 
   <PrivateRoute path="/dev" component={dashboard} />
    }
    </div>
  );
}

const mapStateToProps = state => {
  
  return {
    currentUser: state.currentUser
  };
};
export default connect(
  mapStateToProps,
  { getUserinfo }
)(App);

