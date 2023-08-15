import React, { useEffect, useRef } from 'react';
import '../App.css';
import CodingOnPc from './CodingOnPc.webm'

const Perks = () => {
    const animatedElements = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animatedElements.current.includes(entry.target)) {
                    entry.target.classList.add('animate');
                    animatedElements.current.push(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe the elements you want to animate
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Clean up the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className='container-fluid' style={{ backgroundColor: '#F3F3F3' }}>
            <div className='container'>
                <div className='row' style={{ backgroundColor: '#F3F3F3' }}>
                    <div className='col-6 animate-on-scroll'>
                        <div className='col-12' style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <video autoPlay muted style={{ width: '80%' }}>
                                <source src={CodingOnPc} type="video/mp4" />
                                <p>Browser not supported <a href={CodingOnPc}>link to the video</a> instead.</p>
                            </video>
                            <h1 style={{ animation: 'slideInLeft 1s ease-out forwards' }} >One Step Solution to your Problems</h1>
                            <p className='text-muted' style={{ animation: 'slideInLeft 1s ease-out forwards', marginTop: '30px', fontSize: '20px', textAlign: 'justify', textJustify: 'inter-word' }}>
                                Our products helped build successful and sustainable businesses.
                                We have a team of experts that not only develop but also enhance clients' ideas with constructive feedback.
                            </p>
                        </div>
                    </div>
                    <div className='col-3 animate-on-scroll'>
                        <div className="col-12" style={{ marginTop: '100px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '50px', height: '50px' }} src='https://www.svgrepo.com/show/204777/development-internet.svg' alt='cloud' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Development</p>
                        </div>
                        <div className="col-12" style={{ marginTop: '100px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '50px', height: '50px' }} src='https://www.svgrepo.com/show/362053/cog.svg' alt='AI' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Artificial<br /> Intelligence</p>
                        </div>
                        <div className="col-12" style={{ marginTop: '100px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '60px', height: '60px' }} src='https://www.svgrepo.com/show/428772/marketing-market-social.svg' alt='Marketing' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Digital<br /> Marketing</p>
                        </div>
                    </div>

                    <div className='col-3 animate-on-scroll'>
                        <div className="col-12" style={{ marginTop: '100px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '50px', height: '50px' }} src='https://www.svgrepo.com/show/288980/first-aid-kit-doctor.svg' alt='Health Care' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Health Care</p>
                        </div>
                        <div className="col-12" style={{ marginTop: '120px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '50px', height: '50px' }} src='https://www.svgrepo.com/show/418907/education-graduation-key.svg' alt='education' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Research &<br /> Education</p>
                        </div>
                        <div className="col-12" style={{ marginTop: '100px', marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 1s ease-out forwards' }}>
                            <img style={{ width: '50px', height: '50px' }} src='https://www.svgrepo.com/show/530455/cloud-acceleration.svg' alt='cloud' />
                            <p className='text-muted' style={{ paddingTop: '10px', textAlign: 'center', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                                Cloud<br /> Computing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perks;
