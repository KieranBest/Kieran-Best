import React from "react";
import 'css-doodle';

import { Intro } from "../Components/About/Intro";
import { Portfolio } from "../Components/About/Portfolio";
import { History } from "../Components/About/History";

export const About = () => {
    return (
        <div className=" top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800 via-green-950 to-black text-white flex justify-center items-center flex-col">
                <Intro />
                <Portfolio />
                <History />
            </div>
    )
}