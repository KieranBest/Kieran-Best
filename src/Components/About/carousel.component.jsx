import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { getImageUrl } from '../../utils';

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div className={`flex transition ease-out duration-40`}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s) => {
                    return (
                        <div>
                            <img src={getImageUrl(s.image)} 
                                className="w-full h-full absolute  rounded-lg px-6" />
                            <div className="text-wrap flex sm:w-[50%] px-6 opacity-90">
                                <div className=" m-auto text-center">
                                    <div className="pb-5 text-black">
                                        <h1>{s.title}</h1>
                                        <p>{s.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${
                                i == current ? "bg-white" : "bg-gray-500"
                            }`}
                            >
                        </div>
                    );
                })}
            </div>
        </div>
    );
}