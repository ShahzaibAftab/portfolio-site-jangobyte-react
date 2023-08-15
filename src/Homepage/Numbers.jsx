import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';


const Numbers = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className={`row align-items-center fade-in ${isVisible ? 'visible' : ''}`}>
                <h1 className='px-auto text-center w-100' style={{ fontSize: '55px', marginBottom: '50px' }}>Our Achievements!</h1>
                <div className='col-3 text-center'>
                    <h1 style={{ fontSize: '40px', color: 'gray' }}>
                        <CountUp end={50} duration={3} />+
                    </h1>
                    <p style={{ fontSize: '25px' }}>Projects</p>
                </div>
                <div className='col-3 text-center'>
                    <h1 style={{ fontSize: '40px', color: 'gray' }}>
                        <CountUp end={200} duration={3} />+
                    </h1>
                    <p style={{ fontSize: '25px' }}>Happy Clients</p>
                </div>
                <div className='col-3 text-center'>
                    <h1 style={{ fontSize: '40px', color: 'gray' }}>
                        <CountUp end={99} duration={3} />.
                        <CountUp end={9} duration={3} />%
                    </h1>
                    <p style={{ fontSize: '25px' }}>Success Rate</p>
                </div>
                <div className='col-3 text-center'>
                    <h1 style={{ fontSize: '40px', color: 'gray' }} >
                        <CountUp end={80} duration={3} />%
                    </h1>
                    <p style={{ fontSize: '25px' }}>Remotely Conducted</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
