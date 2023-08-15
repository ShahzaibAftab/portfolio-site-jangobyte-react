import React from 'react';
import { Parallax } from 'react-parallax';

const BackgroundScroll = () => {
    return (
        <Parallax bgImage="./Homepage.jpg" strength={500} style={{ height: '250px' }}>
            <div className="parallax-content text-white d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="text-center" style={{marginTop:'5%'}}>
                    <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Land Your Dream Job at JangoByte</h1>
                    <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>We offer market competitive, Annual incentives, Health insurance and other benefits for our Employees</p>
                </div>
            </div>
        </Parallax>



    );
};

export default BackgroundScroll;
