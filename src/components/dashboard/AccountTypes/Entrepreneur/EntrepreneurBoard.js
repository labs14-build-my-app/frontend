import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";

const EntrepreneurBoard = () => {
  return (
    <>
      {<Redirect to="/entrepreneur/dashboard" />}
      <Route
        path="/entrepreneur/dashboard"
        render={props => {
          return <EntrepreneurHome {...props} />;
        }}
      />
    </>
  );
};

export default EntrepreneurBoard;
