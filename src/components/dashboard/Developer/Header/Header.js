import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {loadApp} from "../../../../redux/actions"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.125em 6.25em 2.25em 6.25em;
  background: transparent linear-gradient(270deg, #F2F3FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  h1 {
      font-size: 3.5rem;
  }
  .header-and-logos-container{
      display: flex;
      align-items: center;
    nav {
        display: inline-flex;
        justify-content: space-evenly;
        margin-right: 3.375em;
        font-size: 1.8rem;
        cursor: pointer;
        user-select: none;
        img{
            margin-left: 0.9375em;
        }
        .header-nav-menu-container{
            position: relative;
            align-self: flex-end;
            right: 0;
            left: 0;
            .header-nav-menu{
            display: flex;
            flex-direction: column;
            position: absolute;
            background: #4D4F5C ;
            z-index: 10;
            right: 1px;
            box-sizing: border-box;
            li{
                margin-top: 1.6rem;
                padding: 1.2rem 2rem;
                &:hover{
                    background: #ccc;
                }
            }
            
        }
        }
        
    }
    .bell-notifications{
        position: relative;
        cursor: pointer;
       .notif-nav-menu-container{
        position: relative;
        display: inline-flex;
        align-self: flex-end;
        right: 0;
        left: 0;
       
         .notif-nav-menu{
            display: flex;
            flex-direction: column;
            position: absolute;
            background: #4D4F5C ;
            z-index: 10;
            right: 1px;
            box-sizing: border-box;
            li{
                margin-top: 1.6rem;
                padding: 1.2rem 2rem;
                &:hover{
                    background: #ccc;
                }
            }
        }
       }
       .notification-dot{
            z-index: 10;
            position: absolute;
            background: #FF0000 0% 0% no-repeat padding-box;
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

const Header = (props) => {
    const {user, loadApp, loadingApp } = props;

    const [menuIsOpen, toggleMenu] = useState(false);
    const [notifIsOpen, toggleNotif] = useState(false);

    if(loadingApp){
        loadApp();
    }

  return (
    <HeaderContainer>
      <Link to="/dev/dashboard" style={{textDecoration: "none", color: "inherit"}}><h1>DevFindr</h1></Link>
      <div className="header-and-logos-container">
        <nav onClick={() => toggleMenu(!menuIsOpen)}>
          <p>{user && `${user.firstName} ${user.lastName}` }</p>
          <img src={`${process.env.PUBLIC_URL}/images/caret-down.svg`} alt="select down"/>
          <div className="header-nav-menu-container"  style={{display: `${menuIsOpen ? 'flex' : 'none'}`}}>
          <ul className="header-nav-menu">
              <li>home</li>
              <li>find projects</li>
              <li>stuff 2</li>
              <li>stuff 3</li>
              <li>settings</li>
          </ul>
          </div>
        </nav>
        <div className="bell-notifications" onClick={() => toggleNotif(!notifIsOpen)} >
            <img src={`${process.env.PUBLIC_URL}/images/icon_bell_line.svg`} alt="icon bell" /> 
            <div className="notification-dot"  />
            <div className="notif-nav-menu-container" style= {{ display: `${notifIsOpen ? 'flex' : 'none' }`}}>
            <ul className="notif-nav-menu">
              <li>home</li>
              <li>find projects</li>
              <li>stuff 2</li>
              <li>stuff 3</li>
              <li>settings</li>
          </ul>
        </div>
         
            {/* style={ { display:`${props.notificationIsThere ? 'block' : 'none'}  ` } } */}
            
        </div>
      </div>
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
    //BOOLEAN IF ARRAY LIST OF NOTIFICATION HAS LENGTH > 0
    
    return{
        user: state.user,
        loadingApp: state.loadingApp
    }
}
export default connect(mapStateToProps, {loadApp})(Header);
