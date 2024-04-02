import React from "react";

import { getImageUrl } from "../utils";
import { Intro } from "../Components/Home/Intro";
import { History } from "../Components/Home/History";

export const Home = () => {
    return (
    <div className="relative">
        <div className="sticky top-0 h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-blue-950 to-black text-white flex justify-center items-center">
            < Intro />
        </div>
        <div className="sticky top-0 h-screen bg-blue-900 text-white flex justify-center items-center">
            < History />
        </div>

        <div className="sticky top-0 h-screen bg-blue-950 text-white flex justify-center items-center">
            <div>
                <h1 className="text-4xl">Third section Scroll</h1>
                <p className="text-2xl">Page scroll down</p>
            </div>
        </div>

        <div className="sticky top-0 h-screen bg-blue-850 text-white flex justify-center items-center">
            <div>
                <h1 className="text-4xl">Fourth section Scroll</h1>
                <p className="text-2xl">Page scroll down</p>
            </div>
        </div>
    </div>
    )
};