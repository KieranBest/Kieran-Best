import React from 'react';
import Typewriter from "typewriter-effect";

import history from "../../data/history.json";

export const History = () => {
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
                                .typeString("History")
                                .start()
                        }
                        }
                    />
                </div>
                <div className="space-y-6 border-l-2 border-white ">
                    {history.map(item => (
                        <div className="relative w-full" key={item.id}>
                            <div className="rounded-full bg-white border-white border-4 absolute -ml-3.5 h-7 w-7 top-1/4">
                            </div>
                            <div className="ml-6 p-3 border-l-2 border-b-2 border-white">
                                <h4 className="font-bold text-white justify-start">{item.title} - {item.company}</h4>
                                <p className="mt-1 block text-xs font-semibold text-white">{item.date}</p>
                                <p className="mt-2 max-w-screen-sm text-sm text-white">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}