import React, {  } from "react";
import { Intro } from "../Components/Contact/Intro";
import { Form } from "../Components/Contact/Form";

export const Contact = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 via-gray-800 to-black text-white min-h-[86vh]">
            <Intro/>
            <Form/>
        </div>
    )
}