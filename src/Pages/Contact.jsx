import React from 'react';

import { Intro } from "../Components/Contact/Intro";

export const Contact = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800 via-red-950 to-black text-white flex justify-center items-center flex-col h-[84vh]">
            <Intro/>
        </div>
    )
}