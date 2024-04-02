import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <div className="flex items-center justify-center align-middle h-[100vh]">
                <div>
                    <h1 className="m-5 p-5 text-6xl text-center">Kieran Best</h1>
                    <p className="m-5 text-xl text-center">I am a developer learning all things creative</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="rounded-full m-5 pr-5 max-w-xl"
                        src={getImageUrl("Home/Photo.jpg")} 
                        alt="Kieran Best" />
                </div>
        </div>
    )
}