import React from "react";
import { Intro } from "../Components/About/Intro";
import { History } from "../Components/About/History";

export const About = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800 via-green-950 to-black text-white">
                <Intro />
                <History />
            </div>
    )
}