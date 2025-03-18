import React from 'react';
import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <section className="p-10">
            <div className='z-0 flex justify-center items-center'>
                <img src="/../../favicon.ico" alt="logo" className='z-0'/>
            </div>
            <div className="z-40 flex h-[20vh] justify-center items-center text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                <Typewriter
                    options={{
                        autoStart: true,
                        changeDeleteSpeed: 150,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .pauseFor(600)
                            .typeString("Hello There.")
                            .pauseFor(800)
                            .deleteChars(12)
                            .pauseFor(10)
                            .typeString("My Name is Kieran Best.")
                            .pauseFor(800)
                            .deleteChars(23)
                            .pauseFor(10)
                            .typeString("Welcome.")
                    }}
                />
            </div>
        </section>
    )
}