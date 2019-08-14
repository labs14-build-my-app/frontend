import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.div`
  display: flex;
  h1 {
  }
  nav {
      position: relative;
    .bell-notification {
      background: #ffb3b3 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 8px #ffd9d9;
      border-radius: 4px;
      opacity: 1;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>DevFindr</h1>
      <div>
        <nav>
          <p>$state.user</p>
          <img src={`${process.env.PUBLIC_URL}/images/caret-down.svg`} />
        </nav>
        <div className="bell-notification" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
