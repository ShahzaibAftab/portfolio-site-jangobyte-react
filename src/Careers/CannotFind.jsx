import React from 'react'
import { Parallax } from 'react-parallax';

const CannotFind = () => {
    return (
        <Parallax bgImage="./Homepage.jpg" strength={500} style={{ height: '600px' }} className="d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12">
                    <div className="col-6 text-white">
                        <h1 style={{ fontSize: '80px', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Cannot Find what you are looking for?</h1>
                    </div>

                    <div className="col-6 mt-5">
                        <button type='button' className='btn btn-primary' style={{ paddingInline: '7rem', paddingBlock: '1rem',marginLeft:'100px' }} ><b>Share Resume</b></button>
                        {/* <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} className='text-white text-center mt-3'><i><u>we'll reachout to you soon</u></i></p> */}

                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default CannotFind
