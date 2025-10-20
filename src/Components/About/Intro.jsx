import React from "react";
import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <section>
            <div className="flex h-screen items-center justify-center flex-col flex-1">
                <div className="text-4xl flex text-center justify-center mb-[10vh]">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 150,
                            changeDeleteSpeed: 150,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("About Me.")
                                .start()
                        }
                        }
                    />
                </div>
            </div>
            <div className="bg-white flex items-center">
                <a href="/features">
                    <div className="w-100">
                        <h1>big ol button</h1>
                    </div>
                </a> 
            </div>
        </section>
    )
}