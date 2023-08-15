import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'react-typewriter-effect';
import main from './main.webm';
const Main = () => {
    const matteBlack = "#28282B"

    // Video Portion
    const videoRef = useRef(null);
    const handleVideoTimeUpdate = () => {
        if (videoRef.current && videoRef.current.currentTime >= 4) {
            videoRef.current.pause(); // Pause the video after 4 seconds
        }
    };
    // Rewrite Effect

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6' style={{ marginTop: '70px' }}>
                        <h1 className='text fade-in-text'>
                            Elevate your ideas to <span className='yellow-underline fade-in-text' style={{ color: '#F23B48' }}>Futuristic</span>
                            <br />Levels
                        </h1>
                        <div style={{ width: '90%' }}>
                            <p className='fade-in-text' style={{ marginTop: '50px', fontSize: '20px', textAlign: 'justify' }}>
                                Become a Part of Unending Journey, whether mobile Application or Website, Desktop or AWS Services, We have got
                                you covered. We have Finest Developers in the Town, that are capable of developing exactly what is needed by the Project
                            </p>
                        </div>
                        <div className='btnAppointment' style={{ marginTop: '50px' }}>
                            <a href='#' className='fade-in-text button-style'>
                                Get Free Quote
                            </a>
                        </div>

                    </div>
                    <div className='col-6'>
                        <video ref={videoRef} onTimeUpdate={handleVideoTimeUpdate} autoPlay muted>
                            <source src={main} type="video/mp4" />
                            Browser Not Supported.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
