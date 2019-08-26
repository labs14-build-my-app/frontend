import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import {textColor1, textColor2, veryLightBlue, headerFontDesktop, projectFontSubtext } from '../../cssVariables';

const HelloWidget = props => {
  const { user } = useSelector(s => s);
  return (
    <HelloWidgetContainer>
      <h1>Hello {user.firstName}, welcome to your dashboard.</h1>
      <div>
        <h3>12:07 PM</h3>
        <p>8/12/2019</p>
      </div>
    </HelloWidgetContainer>
  );
};

export default HelloWidget;

const HelloWidgetContainer = styled.div`
  width: 100%;
  max-height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${textColor1};
  font-size: ${headerFontDesktop};
  background: ${veryLightBlue};
  padding: 1.95rem 4rem 1.95rem;

  div{
    display: flex;
    flex-direction: column;
    text-align: left;

    p{
      color: ${textColor2};
      font-size: ${projectFontSubtext}
      
    }
  }
`;
