import React from "react";
import NotificationCenter from "./components/dashboard/NotificationCenter/NotificationContainer";
import ProjectBoard from "./components/dashboard/ProjectBoard/ProjectIntroduction";
import QuarterlyStatement from "./components/dashboard/QuarterlyStatement/QuarterlyStatement.js";

function App() {
  return (
    <div>
      <QuarterlyStatement />
      <NotificationCenter />
      <ProjectBoard />
    </div>
  );
}

export default App;
