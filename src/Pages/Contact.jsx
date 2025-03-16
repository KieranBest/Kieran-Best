import React, { useEffect } from "react";
import BIRDS from 'vanta/src/vanta.birds';
import { Intro } from "../Components/Contact/Intro";
import { Form } from "../Components/Contact/Form";

export const Contact = () => {
    useEffect(() => {
        BIRDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color1: 0xe66134,
            color2: 0x3e9cbe,
            birdSize: 0.60,
            speedLimit: 3.00,
        })
    });
    return (
        <div className="top-0 text-white h-[86vh]" id="vanta">
            <Intro/>
            <Form/>
        </div>
    )
}