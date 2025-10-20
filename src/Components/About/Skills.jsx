import { useRef } from "react";
import skills from "../../data/skills";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { useIsVisible } from './../PageDetails/useIsVisible';

export const Skills = () => {
    const ref1 = useRef();
    const isVisible = useIsVisible(ref1);

    return (
        <section ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="container px-5 mx-auto">
                <div className="text-center">
                <CpuChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Skills &amp; Technologies
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Languages and technologies I am proficient in.
                </p>
                </div>
            </div>
            <div className="relative flex overflow-x-hidden px-6">
                <div className="flex py-12 animate-marquee whitespace-nowrap">
                    {skills.map((skill) => (
                            <div key={skill.id} className="bg-tranparent rounded-full opacity-75 flex items-center justify-center px-6">
                            <img src={skill.image} alt={skill.name} className="max-w-20"/>
                            </div>
                        ))}
                </div>

                <div className="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-tranparent rounded-full opacity-75 flex items-center justify-center px-6">
                            <img src={skill.image} alt={skill.name} className="max-w-20"/>
                        </div>
                    ))}  
                </div>
            </div>
        </section>
    );
};
