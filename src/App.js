import React from "react";
import "./index.css";
import {Route} from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import dashboard from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute"
import Navigation from "./components/dashboard/Navigation/Navigation"
import Signup from "./components/dashboard/Login/Signup";


function App() {
  return (
    <div>

    {/* renders nav bar for devs */}
    <Route path="/" component={Navigation}/>

    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup} />
    <PrivateRoute path="/dev" component={dashboard} />
    <PrivateRoute path="/entrepreneur" component={dashboard} />
    </div>
  );
}

export default App;
