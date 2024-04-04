import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <section className="p-10">
            <div className='z-0 flex justify-center items-center'>
                <img src="/../public/favicon.ico" alt="logo" className='z-0'/>
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
                            .pauseFor(100)
                            .typeString("Hello There.")
                            .pauseFor(800)
                            .deleteChars(12)
                            .pauseFor(10)
                            .typeString("My Name is Kieran Best.")
                            .pauseFor(800)
                            .deleteChars(23)
                            .pauseFor(10)
                            .typeString("Welcome To My Website.")
                            .pauseFor(800)
                            .deleteChars(22)
                            .pauseFor(10)
                            .typeString("I Love All Things Code.")
                            .pauseFor(800)
                            .deleteChars(23)
                            .pauseFor(10)
                            .typeString("A Few Things About Me.")
                            .pauseFor(800)
                            .deleteChars(22)
                            .pauseFor(10)
                            .typeString("I Am A Software Developer.")
                            .pauseFor(800)
                            .deleteChars(19)
                            .pauseFor(10)
                            .typeString("Gamer.")
                            .pauseFor(800)
                            .deleteChars(6)
                            .pauseFor(10)
                            .typeString("Dog Owner.")
                            .pauseFor(800)
                            .deleteChars(10)
                            .pauseFor(10)
                            .typeString("Music Lover.")
                            .pauseFor(800)
                            .deleteChars(12)
                            .pauseFor(10)
                            .typeString("Husband.")
                            .pauseFor(800)
                            .deleteChars(8)
                            .pauseFor(10)
                            .typeString("Father.")
                            .pauseFor(800)
                            .deleteChars(8)
                            .pauseFor(10)
                            .typeString("lways Busy.")
                            .pauseFor(1)
                            .deleteChars(5)
                            .pauseFor(10)
                            .typeString("Learning New Skills.")
                            .pauseFor(800)
                            .deleteChars(34)
                            .pauseFor(10)
                            .typeString("But Enough About That.")
                            .pauseFor(800)
                            .deleteChars(22)
                            .pauseFor(10)
                            .typeString("Go Ahead.")
                            .pauseFor(200)
                            .deleteChars(9)
                            .pauseFor(10)
                            .typeString("Take A Look Around.")
                            .pauseFor(800)
                            .deleteChars(19)
                            .pauseFor(10)
                            .typeString(":)")
                            .pauseFor(200)
                            .deleteChars(2)
                    }}
                />
            </div>
        </section>
    )
}