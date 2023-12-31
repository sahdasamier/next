import React from "react";
import { projects } from "../date/date";
import { ProjectCard } from "./components/projectCard";

const MyProjects = () => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto mt-10'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			<div className='flex flex-row flex-wrap gap-10 mt-6'>
				{projects.map((project) => {
					return <ProjectCard data={project} />;
				})}
			</div>
		</div>
	);
};

export default MyProjects;