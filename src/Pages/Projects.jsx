import React from 'react';

import { Intro } from "../Components/Projects/Intro";
import { Skills } from "../Components/Projects/Skills";
import { Content } from "../Components/Projects/Content";

export const Projects = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800 via-red-950 to-black text-white">
            <Intro/>
            <Skills/>
            <Content/>
        </div>
    )
}