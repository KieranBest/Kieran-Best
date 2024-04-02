import React from "react";

import { getImageUrl } from "../utils";
import { Intro } from "../Components/Home/Intro";
import { About } from "../Components/Home/About";

export const Home = () => {
    return (
    <div className="relative">
        <div className="sticky top-0 h-screen bg-blue-950 text-white flex justify-center items-center">
            < Intro />
        </div>
        <div className="sticky top-0 h-screen bg-slate-900 text-white flex justify-center items-center">
            < About />
        </div>

        <div className="sticky top-0 h-screen bg-cyan-950 text-white flex justify-center items-center">
            <div>
                <h1 className="text-4xl">Third section Scroll</h1>
                <p className="text-2xl">Page scroll down</p>
            </div>
        </div>

        <div className="sticky top-0 h-screen bg-blue-950 text-white flex justify-center items-center">
            <div>
                <h1 className="text-4xl">Fourth section Scroll</h1>
                <p className="text-2xl">Page scroll down</p>
            </div>
        </div>
    </div>
    )
};