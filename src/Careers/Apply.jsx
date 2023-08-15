import React, { useEffect, useState } from 'react'
import Parallex from './Parallex'
import JobOpenings from './JobOpenings';
import CannotFind from './CannotFind';

import Header from '../Homepage/Header';
import Footer from './../Homepage/Footer';

const Apply = () => {

    return (

        <div>

            <div>
                <Header />
                <Parallex />
                <JobOpenings />
                <CannotFind />
                <Footer />
            </div>
        </div>

    )
}

export default Apply
