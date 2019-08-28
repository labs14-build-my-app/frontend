import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { textColor1, textColor2, veryLightBlue, headerFontDesktop, projectFontSubtext } from '../../cssVariables';

const HelloWidget = props => {
  const { user } = useSelector(s => s);
  console.log(props)
  return (
    <HelloWidgetContainer>
      <h1>Hello {user.firstName}, {props.pathname.startsWith("/ent") ? "review a project or post a new project" : props.pathname.startsWith("/dev") && "Welcome to your dashboard"}</h1>
      <div>
        <h3>12:07 PM</h3>
        <p>8/12/2019</p>
      </div>
    </HelloWidgetContainer>
  );
};

export default HelloWidget;

const HelloWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5rem;
  padding: 1.95rem 4rem 1.95rem;
  font-size: ${headerFontDesktop};
  color: ${textColor1};
  background: ${veryLightBlue};
  border-radius: 5px;

  div{
    display: flex;
    flex-direction: column;
    text-align: right;

    p{
      color: ${textColor2};
      font-size: ${projectFontSubtext}
      
    }
  }
`;
