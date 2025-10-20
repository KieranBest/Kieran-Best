import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, } from "react-icons/bs";

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    console.log(current)
    let previousSlide = () => {
        if (current == 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
        console.log(current)
    };

    let nextSlide = () => {
        if (current == slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
        console.log(current)
    };

    return (
    <div className="overflow-hidden relative w-1/4 flex justify-center object-fit p-6">
        <div className="flex transition ease-out duration-1000" style={{
                transform: `translateX(-${current * 100}%)`,
            }}>
            {slides.map((slide, index) => {
                return (
                    <img key={index} className="rounded-3xl min-w-100 max-w-100 object-scale-down float justify-center object-fit" src={slide.image}/>
                );
            })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-2 text-3xl">
            <button onClick={previousSlide}>
                <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
                <BsFillArrowRightCircleFill />
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((slide, index) => {
                return (
                <div
                    onClick={() => {
                        setCurrent(index);
                    }}
                    key={"circle" + index}
                    className={`rounded-full w-5 h-5 cursor-pointer ${index == current ? "bg-white" : "bg-red-500"}`}
                ></div>
                );
            })}
        </div>
    </div>
    );
}