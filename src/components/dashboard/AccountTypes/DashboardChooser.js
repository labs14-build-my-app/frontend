import React, {useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { loadApp } from "../../../redux/actions";
import { Route, Redirect } from "react-router-dom";

import DeveloperApp from "./Developer/DeveloperApp";
import EntrepreneurSide from "./Entrepreneur/Home";
import ProjectModal from "../AccountTypes/Developer/FindProjects/ProjectModal";

const errorHasOccured = <p>An Error has occured please log in again!</p>;

const DashboardChooser = props => {
  if (!props.user) {
    props.loadApp();
  }

  const {user} = useSelector(s=>s);
  useEffect(()=>{
    props.loadApp()
  },[user.name])
  console.log("DashboardChooser loaded");
  console.assert(!user.isDeveloper === true, "NOT ENT")
  return props.user ? (
    <div className="main-app-column">
      <Route path="/dev/find/projects/:id" component={ProjectModal} />

      {props.user.isDeveloper ? (
        <DeveloperApp {...props} />
      ) : !props.user.isDeveloper === true ? (
        <EntrepreneurSide {...props} />
      ) : (
        errorHasOccured
      )}
    </div>
  ) : (
    errorHasOccured
  );
};
const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.user,
    loggingIn: state.loggingIn
  };
};
export default connect(
  mapStateToProps,
  { loadApp }
)(DashboardChooser);
