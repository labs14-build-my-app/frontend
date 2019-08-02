import React from "react";
import "./index.css";
import {Route} from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import DashboardDev from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute"
import Navigation from "./components/dashboard/Navigation/Navigation"


function App() {
  return (
    <div>

    {/* renders nav bar for devs */}
    <Route path="/" component={Navigation}/>

    <Route path="/login" component={Login}/>
    <PrivateRoute exact path="/" component={DashboardDev} />
    {/* <PrivateRoute exact path="/entrepreneur/dashboard" component={DashboardEntrepreneur} /> */}
    </div>
  );
}

export default App;
