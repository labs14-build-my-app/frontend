import React from "react";
import { connect } from "react-redux";
import { loadApp } from "../../../redux/actions";
import { Route, Redirect } from "react-router-dom";

import DeveloperApp from "./Developer/DeveloperApp";
import EntrepreneurSide from "./Entrepreneur/Home/Home";
import ProjectModal from "../AccountTypes/Developer/FindProjects/ProjectModal";

const errorHasOccured = <p>An Error has occured please log in again!</p>;

const DashboardChooser = props => {
  if (!props.user && !props.loggingIn) {
    props.loadApp();
  }
  console.log("DashboardChooser loaded");
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
