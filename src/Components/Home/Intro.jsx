import React from "react";
import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <div className="text-6xl">
            <Typewriter
                options={{
                    autoStart: true,
                    delay: 150,
                    changeDeleteSpeed: 150,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello There.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("My Name is Kieran Best.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("Welcome To My Website.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("I Love All Things Code.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("A Few Things About Me.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("I Am A Software Developer.")
                        .pauseFor(800)
                        .deleteChars(19)
                        .typeString("Gamer.")
                        .pauseFor(800)
                        .deleteChars(6)
                        .typeString("Dog Owner.")
                        .pauseFor(800)
                        .deleteChars(10)
                        .typeString("Music Lover.")
                        .pauseFor(800)
                        .deleteChars(12)
                        .typeString("Husband.")
                        .pauseFor(800)
                        .deleteChars(8)
                        .typeString("Father.")
                        .pauseFor(800)
                        .deleteChars(8)
                        .typeString("lways Busy.")
                        .pauseFor(100)
                        .deleteChars(5)
                        .typeString("Learning New Skills.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("But Enough About Me.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("Go Ahead.")
                        .pauseFor(400)
                        .deleteAll()
                        .typeString("Take A Look Around.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString("Contact Me If You Have Any Questions.")
                        .pauseFor(800)
                        .deleteAll()
                        .typeString(":)")
                        .start();
                }}
            />
        </div>
    )
}