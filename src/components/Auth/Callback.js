import React, { useEffect } from "react";
import auth0 from "auth0-js";
//redirectUri: "https://build-my-app-fe.onrender.com/callback", // maybe this can redirect to home or change this to auth?
const auth = new auth0.WebAuth({
  domain: "dev-juy4gqyj.auth0.com",
  clientID: "erkAAAar4RrEqx4GcMSefhL42s2fulSu",
  redirectUri: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_TEST_DEPLOY 
      ? 'https://build-my-app-test-deploy.onrender.com/callback'
      : 'https://build-my-app-fe.onrender.com/callback'
    : 'http://localhost:3000/callback',
  responseType: "token id_token",
  scope: "openid profile"
});

const Callback = ({ history, dispatch, isToken, isSignedIn, fetch }) => {
  useEffect(() => {
    // retrive data Auth0 and parse into token
    const getToken = cb => {
      auth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          localStorage.setItem("token", authResult.idToken);
          localStorage.setItem("isLoggedIn", "true");
          dispatch({
            type: "LOADING_STATUS",
            payload: { isToken: true, isLoading: true, role: "" }
          });
          history.push("/");
        } else if (err) {
          // history.replace("/home");
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    };

    // function to login
    const login = () => {
      auth.authorize({
        prompt: "login"
      });
    };

    if (history.location.state === "sign on") {
      login();
    } else {
      getToken();
    }
  }, [history.location.state, history, isToken, isSignedIn, dispatch, fetch]);

  return (
    <div>
      <h2>Creating Session...</h2>
    </div>
  );
};
export default Callback;
