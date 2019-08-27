import React from "react";
import { Route, Redirect } from "react-router-dom";
import EntrepreneurApp from "./EntrepreneurApp"

const EntrepreneurBoard = (props) => {
  const {pathname} = props.history.location
  return (
    <>
      {pathname=== "/" && <Redirect to="/ent/home" />}

      <Route
      exact
        path="/ent/home"
        component={EntrepreneurApp}
      />
    </>
  );
};

export default EntrepreneurBoard;
