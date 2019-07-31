import React from "react";
import styled from "styled-components"
const StatementContainer = styled.div` 
width: 100%;
height: 100%;
background: green;
align-self: flex-start;
`
const QuarterlyStatement = props => {
  return (
    <StatementContainer>
      <h3> Quarterly Statement Overview(Q3) </h3>
      <p> $4,250 Paid this quarter </p>
      <p> $1520 coming due </p>
      <h1> $4,250 </h1>
      <p> Previous Statements </p>
    </StatementContainer>
  );
};

export default QuarterlyStatement;
