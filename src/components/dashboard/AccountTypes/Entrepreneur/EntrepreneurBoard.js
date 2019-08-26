import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";

const EntrepreneurBoard = (props) => {
  const {pathname} = props.history.location
  return (
    <>
    <h2> viajfiadjfiadjfi</h2>
      {pathname=== "/" && <Redirect to="/entrepreneur/home" />}

      <Route
        path="/entrepreneur/home"
        render={props => {
          return <Home {...props} />;
        }}
      />
    </>
  );
};

export default EntrepreneurBoard;
