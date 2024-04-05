import React from 'react';
import { motion } from 'framer-motion';

import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";

export const Skills = () => {
    return (
        <section>
            <div className="flex space-x-16">
                <div className="flex space-x-16 animate-loop-scroll">
                    {skills.map((skill) => (
                        <div key={skill.id} className="bg-tranparent rounded-full opacity-75 flex items-center justify-center">
                            <img loading="lazy" src={getImageUrl(skill.image)} alt={skill.name} className="max-w-20"/>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
                    {skills.map((skill) => (
                        <div key={skill.id} className="bg-transparent rounded-full opacity-75 flex items-center justify-center">
                            <img loading="lazy" src={getImageUrl(skill.image)} alt={skill.name} className="max-w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
