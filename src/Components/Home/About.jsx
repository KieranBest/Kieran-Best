import React from "react";

import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <div>
            <h2 className="m-5 p-5 text-4xl text-center">About</h2>
            <div>
                <ul className="max-w-lg">
                    <li className="size-40 rounded-lg">
                        <img src={getImageUrl("about/dog1.jpg")} alt="dog1" />
                    </li>
                    <li className="size-40 rounded-lg">
                        <img src={getImageUrl("about/dog2.jpg")} alt="dog2" />
                    </li>
                </ul>
                <ul className="">
                    <li className="">
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className="">
                            <h3>Developer</h3>
                            <p>I love developing new concepts with various languages.</p>
                        </div>
                    </li>
                    <li className="">
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className="">
                            <h3>Dog lover</h3>
                            <p>I have 2 crazy dogs that never seem to tire out.</p>
                        </div>
                    </li>
                    <li className="">
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                        <div className="">
                            <h3>Gamer</h3>
                            <p>When I have a spare evening and fancy a change of pace, I love to game, anything from exploring the universe in 'Starfield', to building my own business empire in 'Big Ambitions'.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};