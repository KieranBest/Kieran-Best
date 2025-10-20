import { useRef } from "react";
import portfolio from "../../Data/portfolio.json";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { useIsVisible } from './../PageDetails/useIsVisible';

export const Content = () => {
        const ref1 = useRef();
        const isVisible1 = useIsVisible(ref1);

        const ref2 = useRef();
        const isVisible2 = useIsVisible(ref2);

    return (
        <section>
            <div ref={ref1} className={`container px-5 mx-auto text-center lg:px-40 transition-opacity ease-in duration-900 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Various projects I've built both for personal development and commission pieces.
                    </p>
                </div>
            </div>
            <div ref={ref2} className={`flex flex-wrap transition-opacity ease-in duration-500 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                {portfolio.map((project) => (
                    <a href={project.source} target="_blank" key={project.id} 
                        className="md:w-1/2 xl:w-1/3 2xl:w-1/4 w-100 p-4">
                        <div className="flex relative">
                            <img alt={project.title} src={project.image} className="absolute inset-0 w-full h-full object-cover object-center"/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-900 mb-1">
                                    {project.language}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}