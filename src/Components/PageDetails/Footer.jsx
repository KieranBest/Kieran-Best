import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter className="bg-black text-white">
            <div className='flex items-center justify-center h-[6vh]'>
                &copy; {new Date().getFullYear()}&nbsp;Copyright&nbsp;{' '}
                <a href="https://www.bestwebdev.co.uk" target="_blank">
                    Kieran Best
                </a>
            </div>
        </MDBFooter>
    );
}