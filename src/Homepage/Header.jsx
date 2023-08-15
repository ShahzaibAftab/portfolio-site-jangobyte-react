import React, { useState, useEffect } from 'react';
import logo from './logo.jpg'; // Import the image file correctly
import '../App.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`container-fluid mx-n2${isScrolled ? ' scrolled shadow' : ''}`}>
            <div className={`row${isScrolled ? ' scrolled' : ''}`} style={{ minWidth: '100%' }}>
                <div className='col-4' ><img src={logo} style={{ height: '100px' }} alt='jangobyte' /></div>
                <div className='col-5 d-flex justify-content-between mt-5 mb-5' for='main'>
                    <a type='button' style={{ fontSize: '20px' }} className='link-button' href='#'>
                        Home
                    </a>
                    <a type='button' style={{ fontSize: '20px' }} className='link-button' href='#'>
                        Contact
                    </a>
                    <a type='button' style={{ fontSize: '20px' }} className='link-button' href='#'>
                        About
                    </a>
                    <a type='button' style={{ fontSize: '20px' }} className='link-button' href='/Careers'>
                        Careers
                    </a>
                </div>
                <div className='col-3 mt-3'>
                    <a
                        style={{

                            position: 'relative',
                            border: '1px solid black',
                            borderRadius: '10px',
                            marginTop: '10px',
                            float: 'right',
                            marginRight: '20px',
                            fontSize: '20px',
                            fontWeight: '1000',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                            textDecoration: 'none',
                            backgroundColor: '#28282B',
                            color: 'white',
                            overflow: 'hidden',
                        }}
                        href="#"
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = '#333';
                            e.target.style.borderColor = '#333';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'black';
                            e.target.style.borderColor = 'black';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        <span
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))',
                                transition: 'left 0.3s ease',
                            }}
                        ></span>
                        Training Program
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Header;
