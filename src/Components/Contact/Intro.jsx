import Typewriter from "typewriter-effect";

export const Intro = () => {
    return (
        <section>
            <div className="flex h-[50vh] flex-col flex-1 items-center justify-center">
                <div className="text-4xl h-[10vh] flex text-center justify-center">
                    <Typewriter
                        options={{
                            autoStart: true,
                            delay: 150,
                            changeDeleteSpeed: 150,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Contact Me")
                                .start()
                        }}
                    />
                </div>
            </div>
        </section>
    )
}