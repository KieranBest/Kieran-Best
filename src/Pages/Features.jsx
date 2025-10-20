import React from "react";
import Carousel from "./../Components/Features/Carousel.component";
import { Loading } from "../Components/Features/Loading"
import { SlideIn } from "../Components/Features/SlideIn";
import skills from "./../Data/skills.json"

export const Features = () => {
    return (
        <div className="min-h-[90vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 via-gray-800 to-black text-white">
            <div className="flex justify-center object-fit">
                <Carousel slides={skills} />
            </div>
            < Loading />
            < SlideIn />
        </div>
    )
}