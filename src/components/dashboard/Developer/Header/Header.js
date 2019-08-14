import React, {useEffect} from "react";
import styled from "styled-components";
import {loadApp} from "../../../../redux/actions"
import {connect} from "react-redux";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 3.125em 6.25em 2.25em 6.25em;
  
  h1 {
      font-size: 3.5rem;
  }
  .header-and-logos-container{
      display: flex;
      align-items: center;
    nav {
        display: flex;
        justify-content: space-evenly;
        margin-right: 3.375em;
        font-size: 1.8rem;
        img{
            margin-left: 0.9375em;
        }
    }
    .bell-notifications {
        display: flex;
        position: relative;
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
    console.log(props)
    const {user, loadApp, loadingApp } = props;
    // loadApp();
    if(loadingApp){
        loadApp();
    }

  return (
    <HeaderContainer>
      <h1>DevFindr</h1>
      <div className="header-and-logos-container">
        <nav>
          <p>{user && user.name}</p>
          <img src={`${process.env.PUBLIC_URL}/images/caret-down.svg`} alt="select down"/>
        </nav>
        <div className="bell-notifications">
            <div className="notification-dot" style={ { display:`${props.notificationIsThere ? 'block' : 'none'}  ` } }/>
            <img src={`${process.env.PUBLIC_URL}/images/icon_bell_line.svg`} alt="icon bell" />
        </div>
      </div>
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
    //BOOLEAN IF ARRAY LIST OF NOTIFICATION HAS LENGTH > 0
    
    console.log(state.notificationIsThere)
    return{
        user: state.user,
        loadingApp: state.loadingApp
    }
}
export default connect(mapStateToProps, {loadApp})(Header);
