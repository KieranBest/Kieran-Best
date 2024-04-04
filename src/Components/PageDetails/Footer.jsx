import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter className="bg-black" color='white'>
            <div className='flex items-center justify-center text-center h-[8vh]'>
            &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='www.bestwebdev.co.uk'>
                    bestwebdev.co.uk
                </a>
            </div>
        </MDBFooter>
    );
}