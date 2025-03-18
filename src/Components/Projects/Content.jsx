import React from "react";
import portfolio from "../../Data/portfolio.json";

export const Content = () => {
    return (
        <section>
            <div className="w-5/6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-10 gap-4">
                        {portfolio.map((s) => (
                            <a href={s.source} target="_blank" key={s.id} 
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row hover:bg-gray-200 transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img alt={s.title} src={s.image} className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-1/2 md:rounded-none md:rounded-s-lg"/>
                                <div className="m-auto text-center p-4 leading-normal">
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{s.title}</p>
                                    <p className="mb-3 text-black dark:text-white">{s.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            
        </section>
    )
}