import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { login } from '../../actions';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.login({ ...this.state }).then(() => {
    //     this.props.history.push('/');
    // });
    //if user.type === dev
    this.props.history.push('/dev/dashboard');
    
    //if user.type === entrepreneur 
    // this.props.history.push('/entrepreneur/dashboard');
  };

  render() {
    return (
      <div className="login-container">
        <div className="cta-content">
          <h1>Merge into DevFindr. Commit for free.</h1>
        </div>
        <div className="login-main">
          <h1
            className="login-title" >
            GET IN HERE.
          </h1>
          
          <form
            className="LogIn__Form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={this.handleChanges}
              value={this.state.value}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChanges}
              value={this.state.value}
            />
            <button type="submit">
              {this.props.isLoggingIn ? <BeatLoader /> : 'Sign In'}
            </button>
            <div className="alternative-cta">
              <p>Don't have a localStorage.getItem('token') yet? </p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {  }
)(Login);