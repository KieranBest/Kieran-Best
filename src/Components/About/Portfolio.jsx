import React from 'react';
import Typewriter from "typewriter-effect";

import { getImageUrl } from "./../../utils";
import portfolio from "../../data/portfolio.json";

export const Portfolio = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project) => (
                <div key={project.id} className="bg-white shadow-md p-4 rounded-lg">
                    <img src={getImageUrl(project.image)} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                    <p className="text-gray-500 mt-2">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 mt-4 hover:underline">View Project</a>
                </div>
            ))}
        </div>            
            )
}