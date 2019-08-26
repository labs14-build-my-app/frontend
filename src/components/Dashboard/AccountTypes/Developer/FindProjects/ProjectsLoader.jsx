import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSelfProjects, fetchAllProjects } from "../../../../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProjectsLoader = () => {
	return (
		<div className="h">
			projects live here
		</div>
	)
}

export default ProjectsLoader;
