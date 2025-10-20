import { useRef } from "react";
import { useIsVisible } from './../PageDetails/useIsVisible';

export const SlideIn = () => {
    const ref1 = useRef();
    const isVisible = useIsVisible(ref1);

    return (
        <section>
            <div ref={ref1} className={`container px-5 mx-auto text-center lg:px-40 transition-opacity ease-in duration-75 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Some Example Text
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lots of example text that's really interesting.
                    </p>
                </div>
            </div>
        </section>
    )
} 