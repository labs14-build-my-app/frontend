import React, { useEffect, useState } from "react";
import { Button, Card } from "../../custom-styles";
import EmailDrawer from "../EmailDrawer";

const ProjectPlan = ({ project, user, clickHandler, plan, history }) => {
  return (
    <div className={"project-plans"}>
      {plan && (
        <Card style={{ width: "80%", color: "black" }}>
          <div style={{ width: "25%" }}>
            <h3 style={{ color: "black" }} className="ProjectTitle">
              Plan
            </h3>
            <h3 style={{ color: "black" }} className="ProjectTitle">
              {plan.name}
            </h3>
          </div>
          <div style={{ width: "75%" }}>
            <p>{plan.description}</p>

            {user.id === plan.user_id || user.id === plan.project_owner_id ? (
              <>
                <p>Will accept ${(plan.budget / 100).toFixed(2)}</p>
                <p>Can Deliver by {plan.dueDate}</p>
                <p>Plan Status: {plan.planStatus}</p>
              </>
            ) : null}
            {user.id === plan.user_id ? null : (
              <EmailDrawer
                center 
                emailAddress={plan.email}
                firstName={user.firstName}
              />
            )}
          </div>
          {project.user_id === user.id &&
          project.projectStatus === "proposal" ? (
            <div className={"button-container"}>
              <Button
                medium
                style={{ background: "#589658", border: "none" }}
                type={"submit"}
                onClick={e => {
                  return clickHandler(e, plan.id, "selected");
                }}
              >
                <i class="fas fa-check" />
                Accept
              </Button>
              <Button
                medium
                style={{ background: "#e65211c9", border: "none" }}
                type={"submit"}
                onClick={e => {
                  return clickHandler(e, plan.id, "declined");
                }}
              >
                <i class="fas fa-times" />
                Decline
              </Button>
            </div>
          ) : null}
        </Card>
      )}
    </div>
  );
};

export default ProjectPlan;
