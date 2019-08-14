import React from "react";
import DeveloperDashboard from "../Developer/DeveloperDashboard";
import EntrepreneurBoard from "../Entrepreneur/EntrepreneurBoard";
import { connect } from "react-redux";
import { loadApp } from "../../../redux/actions";
const errorHasOccured = <p>An Error has occured please log in again</p>;

const DevFindr = props => {
  // console.log(props)
  if (!props.user) {
    props.loadApp();
  }
  return props.user ? (
    <div className="main-app-column">
      {props.user.isDeveloper ? (
        <DeveloperDashboard {...props} />
      ) : !props.user.isDeveloper === true ? (
        <EntrepreneurBoard {...props} />
      ) : (
        errorHasOccured
      )}
    </ div>
  ) : (
    errorHasOccured
  );
};
const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { loadApp }
)(DevFindr);
