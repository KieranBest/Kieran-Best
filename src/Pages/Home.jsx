import React from "react";
import { Intro } from "../Components/Home/Intro";

export const Home = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 via-gray-800 to-black text-white flex justify-center items-center flex-col min-h-[86vh]">
            < Intro />
        </div>
    )
};