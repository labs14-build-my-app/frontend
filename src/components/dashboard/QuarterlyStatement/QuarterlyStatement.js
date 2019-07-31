import React from "react";
import styled from "styled-components"
const StatementContainer = styled.div` 
width: 100%;
height: 100%;
background: green;
align-self: flex-start;
background: linear-gradient(225deg, #2BFFAE,#34806A);
border-radius: 10px;
color: #fff;
padding: 1.25em;
h3{
  font-size: 1.8rem;
  margin-bottom: .8125em;
}
p{
  font-size: 1.3rem;
  margin-bottom: .8125em;
}
h1{
  font-size: 7.0rem;
}
.statement-quarter{
  display: flex;
  width: 100%;
  .statement-incoming{
    align-self: flex-end;
    margin-right: 3.4375em;
  }
  h1{
   
    text-align: center;
  }
}
.prev-statement-cta{
  text-align: right;
  margin: 1.1875em 0 0 0;
}
`
const QuarterlyStatement = props => {
  return (
    <StatementContainer>
      <h3> Quarterly Statement Overview(Q3) </h3>
      <div className="statement-quarter">
      <div class="statement-incoming">
      <p> $4,250 Paid this quarter </p>
      <p> $1520 coming due </p>
      </div>
      <h1> $4,250 </h1>
      </div>
      <p className="prev-statement-cta"> Previous Statements </p>
    </StatementContainer>
  );
};

export default QuarterlyStatement;
