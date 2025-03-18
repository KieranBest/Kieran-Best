import React from 'react';

import history from "../../data/history.json";

export const History = () => {
    return (
        <section className="sm:mt-2">
            <div>
                <h2 className="text-3xl font-bold text-center pb-10">History</h2>
            </div>
            <div className="flex items-center justify-center flex-col flex-1 pb-20">
                <div className="space-y-6 border-l-2 border-white ">
                    {history.map(item => (
                        <div className="relative w-full" key={item.id}>
                            <img src={item.image} alt={item.title} className="bg-white rounded-full border-white border-2 absolute -ml-5 h-10 w-10 top-1/4" />
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