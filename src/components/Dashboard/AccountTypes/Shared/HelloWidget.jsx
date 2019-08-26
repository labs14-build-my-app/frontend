import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 4rem 1.8rem;
  max-width: 1657px;
  max-height: 7rem;
  border-radius: 5px;
  font-size: 1.8rem;
  color: rgba(67, 66, 93, 1);
  background: #f2f3ff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.25);

  div{
    text-align: right;
    line-height: 17px;

    p{
      font-size: 1.3rem;
      color: #9592A8;
    }
  }
`;
