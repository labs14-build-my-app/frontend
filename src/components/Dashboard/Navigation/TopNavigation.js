import React, { useState } from "react";
import styled from "styled-components";
import { loadApp, logout } from "../../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TopNavigation = props => {
  const { user, loadApp, loadingApp, logout } = props;
  console.log(props)
  const [menuIsOpen, toggleMenu] = useState(false);
  const [notifIsOpen, toggleNotif] = useState(false);

  if (loadingApp) {
    loadApp();
  }
  const handleLogout = () => {
    logout().then(res => {
      localStorage.clear()
      props.history.push("/login");
      window.location.reload()
    })

  };

  return (
    <TopNavigationContainer>
      <Link to="/dev/home" style={{ textDecoration: "none", color: "inherit" }} >
        <h1>DevFindr</h1>
      </Link>
      <div className="header-and-logos-container">
        <nav onClick={() => toggleMenu(!menuIsOpen)}>
          <p>{user && `${user.firstName} ${user.lastName}`}</p>
          <img src={`${process.env.PUBLIC_URL}/images/caret-down.svg`} alt="select down" />
          <div className="header-nav-menu-container" style={{ display: `${menuIsOpen ? "flex" : "none"}` }} >
            <ul className="header-nav-menu">
              <li>home</li>
              <li>find projects</li>
              <li>stuff 2</li>
              <li>stuff 3</li>
              <li onClick={handleLogout}>Log Out</li>
            </ul>
          </div>
        </nav>
        <div className="bell-notifications" onClick={() => toggleNotif(!notifIsOpen)} >
          <img src={`${process.env.PUBLIC_URL}/images/icon_bell_line.svg`} alt="icon bell" />
          <div className="notification-dot" />
          <div className="notif-nav-menu-container" style={{ display: `${notifIsOpen ? "flex" : "none"}` }} >
            <ul className="notif-nav-menu">
              <li>Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</li>
              <li>Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.</li>
              <li>Redux is an open-source JavaScript library for managing application state.</li>
              <li>Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</li>
            </ul>
          </div>

          {/* style={ { display:`${props.notificationIsThere ? 'block' : 'none'}  ` } } */}
        </div>
      </div>
    </TopNavigationContainer>
  );
};

const mapStateToProps = state => {
  //BOOLEAN IF ARRAY LIST OF NOTIFICATION HAS LENGTH > 0

  return {
    user: state.user,
    loadingApp: state.loadingApp
  };
};
export default connect(
  mapStateToProps,
  { loadApp, logout }
)(TopNavigation);

const TopNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.125em 6.25em 2.25em 6.25em;
  background: transparent linear-gradient(270deg, rgba(242, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%) 0% 0% no-repeat padding-box;
  z-index: 15;
  
  h1 {
    font-size: 3.5rem;
  }
  .header-and-logos-container {
    display: flex;
    align-items: center;
    nav {
      display: inline-flex;
      justify-content: space-evenly;
      margin-right: 3.375em;
      font-size: 1.8rem;
      cursor: pointer;
      user-select: none;
      img {
        margin-left: 0.9375em;
      }
      .header-nav-menu-container {
        position: relative;
        align-self: flex-end;
        right: 0;
        left: 0;
        .header-nav-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          background: #9519e8;
          z-index: 10;
          right: 1px;
          box-sizing: border-box;
          background: #43425D 0% 0% no-repeat padding-box;
          border-radius: 0px 0px 5px 5px;
          opacity: 1;
          color: white;
          width: 13rem;
          li {
            margin-top: 0.5rem;
            padding: 0.5rem 1rem;
            color: white;
            :hover {
              background: #bb75f0;
              transition: 0.2s;
            }
          }
        }
      }
    }
    .bell-notifications {
      position: relative;
      cursor: pointer;
      .notif-nav-menu-container {
        position: relative;
        display: inline-flex;
        align-self: flex-end;
        right: 0;
        left: 0;

        .notif-nav-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          background: #4d4f5c;
          z-index: 10;
          right: 1px;
          box-sizing: border-box;
          background: #43425D 0% 0% no-repeat padding-box;
          border-radius: 0px 0px 5px 5px;
          opacity: 1;
          color: white;
          width: 22rem;
          li {
            margin-top: 1.6rem;
            padding: 1.2rem 2rem;
            &:hover {
              background: #ccc;
            }
          }
        }
      }
      .notification-dot {
        z-index: 10;
        position: absolute;
        background: #ff0000 0% 0% no-repeat padding-box;
        opacity: 1;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        top: -3px;
        right: -6.5px;
      }
    }
  }
`;
