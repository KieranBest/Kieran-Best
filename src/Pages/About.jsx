import React from 'react';

import { Intro } from "../Components/About/Intro";
import { Skills } from "../Components/About/Skills";
import { Content } from "../Components/About/Content";
// import { Certifications } from "../Components/About/Certifications";

export const About = () => {
    return (
        <div className="min-h-[90vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 via-gray-800 to-black text-white">
            <Intro/>
            <Skills/>
            <Content/>
            {/* <Certifications /> */}
        </div>
    )
}