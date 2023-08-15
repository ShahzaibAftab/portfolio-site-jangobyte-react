import React from 'react'

const JobOpenings = () => {
    return (
        <div class="container bg" style={{paddingBottom:'100px'}}>
            <div class="text-center mb-3">
                <h3 className='text-muted pt-3'>Jobs opening</h3>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-column flex-lg-row">
                        <span class="avatar avatar-text rounded-3 me-4 mb-2">FD</span>
                        <div class="row flex-fill">
                            <div class="col-sm-5">
                                <h4 class="h5">Junior Frontend Developer</h4>
                                <span class="badge bg-secondary">Onsite</span> <span class="badge bg-success">60K - 100K</span>
                            </div>
                            <div class="col-sm-4 py-2">
                                <span class="badge bg-secondary">REACT</span>
                                <span class="badge bg-secondary mx-2">NODE</span>
                                <span class="badge bg-secondary">TYPESCRIPT</span>
                                <span class="badge bg-secondary mx-2">JUNIOR</span>
                            </div>
                            <div class="col-sm-3 text-lg-end">
                                <a href="#" class="btn btn-primary stretched-link">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-column flex-lg-row">
                        <span class="avatar avatar-text rounded-3 me-4 bg-warning mb-2">BE</span>
                        <div class="row flex-fill">
                            <div class="col-sm-5">
                                <h4 class="h5">Senior Backend Engineer</h4>
                                <span class="badge bg-secondary">Remote</span> <span class="badge bg-success">90K - 180K</span>
                            </div>
                            <div class="col-sm-4 py-2">
                                <span class="badge bg-secondary">GOLANG</span>
                                <span class="badge bg-secondary mx-2">SENIOR</span>
                                <span class="badge bg-secondary">ENGINEER</span>
                                <span class="badge bg-secondary mx-2">BACKEND</span>
                            </div>
                            <div class="col-sm-3 text-lg-end">
                                <a href="#" class="btn btn-primary stretched-link">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-column flex-lg-row">
                        <span class="avatar avatar-text rounded-3 me-4 bg-info mb-2">PM</span>
                        <div class="row flex-fill">
                            <div class="col-sm-5">
                                <h4 class="h5">Director of Product Marketing</h4>
                                <span class="badge bg-secondary">Onsite</span> <span class="badge bg-success">150K - 210K</span>
                            </div>
                            <div class="col-sm-4 py-2">
                                <span class="badge bg-secondary">PRODUCT MARKETING</span>
                                <span class="badge bg-secondary mx-2">MARKETING</span>
                                <span class="badge bg-secondary">EXECUTIVE</span>
                                <span class="badge bg-secondary mx-2">ECOMMERCE</span>
                            </div>
                            <div class="col-sm-3 text-lg-end">
                                <a href="#" class="btn btn-primary stretched-link">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOpenings
