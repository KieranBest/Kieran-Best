import React from 'react';

import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";

export const Skills = () => {
    return (
        <section>
            <div>
                <h2 className="text-3xl font-bold text-center">Skills</h2>
            </div>
            <div className="relative flex overflow-x-hidden px-6">
                <div className="flex py-12 animate-marquee whitespace-nowrap">
                    {skills.map((skill, index) => (
                            <div key={index} className="bg-tranparent rounded-full opacity-75 flex items-center justify-center px-6">
                            <img src={getImageUrl(skill.image)} alt={skill.name} className="max-w-20"/>
                            </div>
                        ))}
                </div>

                <div className="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-tranparent rounded-full opacity-75 flex items-center justify-center px-6">
                            <img src={getImageUrl(skill.image)} alt={skill.name} className="max-w-20"/>
                        </div>
                    ))}  
                </div>
            </div>
        </section>
    );
};
