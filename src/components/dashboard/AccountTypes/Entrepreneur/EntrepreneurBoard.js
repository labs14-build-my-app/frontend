import React from "react";
import { Route, Redirect } from "react-router-dom";
import EntrepreneurApp from "./EntrepreneurApp"

const EntrepreneurBoard = (props) => {
  const {pathname} = props.history.location
  return (
    <>
    <h2> viajfiadjfiadjfi</h2>
      {pathname=== "/" && <Redirect to="/entrepreneur/home" />}

      <Route
      exact
        path="/entrepreneur/home"
        component={EntrepreneurApp}
      />
    </>
  );
};

export default EntrepreneurBoard;
