import React, { useEffect, useState } from 'react';
import pointerBtn from './../assets/pointerBtn.svg';
import { Link } from 'react-router-dom';


function Content() {
    const [showPointer, setShowPointer] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPointer(true);
            setTimeout(() => {
                setShowPointer(false);
            }, 1000); // Display pointer for 1 second
        }, 3000); // Trigger every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start min-h-full bg-gray-100 py-[5rem]">
            <h1 className="text-6xl font-bold text-blue-600 mb-2 ">
                <span className='text-[#DB4437]'>Google</span>
                <span className='text-[#F4B400]'>Developer</span>
                <span className='text-[#0D652D]'>Groups</span>
            </h1>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">On Campus Programme</h2>
            <p className="text-lg text-[#E37400] mb-6">Madan Mohan Malaviya University of Technology, Gorakhpur</p>

            <div className='w-full flex justify-center items-center'>
            <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Image container */}
                    <div className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 py-2 rounded-full bg-white shadow-md transition-opacity duration-300 ${showPointer ? 'opacity-100 shadow-xl' : 'opacity-0'}`}>
                <a href='#Team'>
                        <img src={pointerBtn} alt="click image" loading='lazy' />
                </a>
                    </div>

                {/* Black overlay */}
                {!showPointer && (
                    <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 opacity-50 rounded-full"></div>
                )}
            </div>
            </div>
            
        </div>
    );
}

export default Content;
