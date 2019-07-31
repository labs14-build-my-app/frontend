import React from "react";
import "./index.css";
import {Route} from "react-router-dom";
import Login from "./components/dashboard/Login/Login";
import DashboardDev from "./components/dashboard/index";
import PrivateRoute from "./components/auth/PrivateRoute"



function App() {
  return (
    <div>

    {/* <Navigation /> */}
    
    <Route path="/login" component={Login}/>
    <PrivateRoute exact path="/dev/dashboard" component={DashboardDev} />
    {/* <PrivateRoute exact path="/entrepreneur/dashboard" component={DashboardEntrepreneur} /> */}
    </div>
  );
}

export default App;
