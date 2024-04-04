import React from 'react';
import Typewriter from "typewriter-effect";

import { getImageUrl } from "./../../utils";
import portfolio from "../../data/portfolio.json";

export const Portfolio = () => {
    return (
        <section className="p-10">
            <div className="flex h-screen items-center justify-center flex-col flex-1">
                <div className="text-4xl h-[10vh] flex text-center justify-center">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 150,
                            changeDeleteSpeed: 150,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Portfolio")
                                .start()
                        }
                        }
                    />
                </div>
                <div className="text-white relative grid auto-cols grid-flow-col gap-4 overflow-x-auto">
                    {portfolio.map(item => (
                        <div className="group col-span-1 cursor-pointer" key={item.id}>
                        <a href={item.source} target="_blank">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-white bg-black">
                                <img className="w-full" src={getImageUrl(item.image)} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.title}</div>
                                    <p className="text-base">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                                    <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jest</span>
                                </div>
                            </div>
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}