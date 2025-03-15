import React from "react";
import portfolio from "../../data/portfolio.json";

export const Content = () => {
    const imgSrc = "../../../assets/"
    return (
        <section>
            <div className="mx-auto w-full sm:w-3/4 lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {portfolio.map((s) => (
                        <a href={s.source} target="_blank" key={s.id}>
                            <div className="bg-black m-10 p-10 w-full">
                                <img alt={s.title} src={s.image}
                                    className=""
                                />
                                <p className="text-base pb-40">{s.title} - {s.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}