import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (


        <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: '#1c2331', animation: 'slideInLeft 2s ease-out forwards' }}
        >
            <section
                className="d-flex justify-content-between p-4"
                style={{ backgroundColor: '#4F8CD6' }}
            >
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="#" className="text-white me-4">
                        <FaFacebookSquare className='icon' />
                    </a>
                    <a href="#" className="text-white me-4">
                        <FaTwitterSquare />
                    </a>
                    <a href="#" className="text-white me-4">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white me-4">
                        <AiFillLinkedin />
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Jangobyte Innovations</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#4F8CD6', height: '2px' }}
                            />
                            <p>
                                Join us Today! Take your Business Ideas to a whole new level
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Services</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#4F8CD6', height: '2px' }}
                            />
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Mobile Application</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Web Application</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Artificial Intelligence</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Cloud Services</a>
                            </p>

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Enhance your Ideas</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#4F8CD6', height: '2px' }}
                            />
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Get a free Quote</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Training Programs</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="#" className="text-white">Careers</a>
                            </p>
                            <p>
                                <a style={{ textDecoration: 'none' }} href="/contact-Us" className="text-white">Contact Us</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact Us</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#4F8CD6', height: '2px' }}
                            />
                            <p><i className="fas fa-home mr-3"></i> New Lahore, Punjab, PK</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@jangobyte.com</p>
                            <p><i className="fas fa-print mr-3"></i> +92 311 477 3898</p>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="text-center p-3"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                © 2023 Copyright:
                <a className="text-white" href="#!" style={{ marginLeft: '10px', textDecoration: 'none' }}
                ><i>Jangobyte inc.</i></a>
            </div>
        </footer>

    );
};
export default Footer;