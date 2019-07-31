import React from "react";
import NotificationCenter from "./components/dashboard/NotificationCenter/NotificationContainer";
import ProjectBoard from "./components/dashboard/ProjectBoard/ProjectBoard";
import QuarterlyStatement from "./components/dashboard/QuarterlyStatement/QuarterlyStatement.js";
import styled from "styled-components";
import "./index.css";
import Navigation from "./components/dashboard/Navigation/Navigation";
const SideContent = styled.div`
display: flex;
justify-content: evenly;
align-items: center;
margin-bottom: 7.25em;
.side-notif-and-statement-container{
  align-self: flex-end;
}
`;


function App() {
  return (
    <div>
    <Navigation />
    <SideContent>
      <ProjectBoard />
      <div className="side-notif-and-statement-container">
      <QuarterlyStatement />
      <NotificationCenter />
    </div>
    </SideContent>
    </div>
  );
}

export default App;
