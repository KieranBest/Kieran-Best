import React from "react";
import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <section>
            <div className="flex h-[50vh] items-center justify-center flex-col flex-1">
                <div className="text-4xl flex text-center justify-center">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 150,
                            changeDeleteSpeed: 150,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("About Me")
                                .start()
                        }
                        }
                    />
                </div>
            </div>
        </section>
    )
}