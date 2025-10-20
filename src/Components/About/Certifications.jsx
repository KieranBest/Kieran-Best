import React from "react";
import portfolio from "../../Data/portfolio.json";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export const Certifications = () => {
    return (
        <section>
            <div className="container px-5 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                <CheckBadgeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Certifications
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Certifications I've earned.
                </p>
                </div>
            </div>
            <div className="flex flex-wrap">
                
            </div>            
        </section>
    )
}