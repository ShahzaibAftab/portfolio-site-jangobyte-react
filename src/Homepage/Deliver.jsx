import React, { useState, useEffect } from 'react';
const Deliver = () => {
    return (
        <section >
            <div className="expanding-hr-container">
                <div className="expanding-hr">
                    <div className="hr-line"></div>
                </div>
            </div>
            <div className='container-fluid py-5 bg-white'>
                <h3 className='d-flex justify-content-center'>Our Commitment</h3>
                <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-muted mx-auto text-center" style={{ width: '60%' }}><i>
                    We Provide Solutions that fulfils the exact need based uppon effective logics and
                    optimum Algorithm. Our team utilizes effective Approaches before initiating the project to maximize Client satisfaction.</i>
                </p>
                <div class="container mt-5 removeTableBorder">
                    <table style={{ width: '100%', height: '400px' }} class="shadow table custom-table table-bordered table-hover table-striped">
                        <tbody>
                            <tr style={{ fontSize: '20px' }}>
                                <th><span class="text-success center">Type</span></th>
                                <th><span class="text-success center">Scalable</span></th>
                                <th><span class="text-success center">Robust</span></th>
                                <th><span class="text-success center">Reliable</span></th>
                                <th><span class="text-success center">Responsive</span></th>
                            </tr>
                            <tr>
                                <th><span style={{ fontSize: '20px' }} class="text-success">Web Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                            <tr>
                                <th><span style={{ fontSize: '20px' }} class="text-success ">Mobile Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                            <tr>
                                <th><span style={{ fontSize: '20px' }} class="text-success">Desktop Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Deliver
