import React, { useContext } from 'react';

const TabCurriculum = ({active}) => {
    return (

        <div className={`tab-pane fade ${active ? 'active show' : ''}`} id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">

            <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">

                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-1">
                        <button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                            Introduction of Digital Marketing
												<span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                </div>
                                <p className="mb-0">2m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px"> What is Digital Marketing What is Digital Marketing</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Type of Digital Marketing</span>
                                </div>
                                <p className="mb-0">18m 10s</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-2">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                            Customer Life cycle
												<span className="small ms-0 ms-sm-2">(4 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">What is Digital Marketing</span>
                                </div>
                                <p className="mb-0">11m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">15 Tips for Writing Magnetic Headlines</span>
                                </div>
                                <p className="mb-0 text-truncate">25m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Like Your Customers Talk</span>
                                </div>
                                <p className="mb-0">11m 30s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-play me-0"></i>
                                        </a>
                                    </div>
                                    <div className="row g-sm-0 align-items-center">
                                        <div className="col-sm-6">
                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">How to Flip Features Into Benefits</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">35m 30s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-5">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                            What is Search Engine Optimization(SEO)
												<span className="small ms-0 ms-sm-2">(10 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                </div>
                                <p className="mb-0">1m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Overview of SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">11m 03s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to SEO Optimise Your Homepage</span>
                                </div>
                                <p className="mb-0">15m 00s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to SEO Optimise Your Homepage</span>
                                </div>
                                <p className="mb-0">15m 00s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Title Tags Search Engines Love</span>
                                </div>
                                <p className="mb-0">25m 30s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">SEO Keyword Planning</span>
                                </div>
                                <p className="mb-0">18m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">eCommerce SEO</span>
                                </div>
                                <p className="mb-0">28m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Internal and External Links</span>
                                </div>
                                <p className="mb-0">45m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Mobile SEO</span>
                                </div>
                                <p className="mb-0">8m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Off-page SEO</span>
                                </div>
                                <p className="mb-0">18m 10s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring SEO Effectiveness</span>
                                </div>
                                <p className="mb-0">35m 10s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-6">
                        <button className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                            Facebook ADS
												<span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                </div>
                                <p className="mb-0">1m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating Facebook Pages</span>
                                </div>
                                <p className="mb-0 text-truncate">25m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Facebook Page Custom URL</span>
                                </div>
                                <p className="mb-0">11m 30s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-7">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                            YouTube Marketing
												<span className="small ms-0 ms-sm-2">(5 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Video Flow</span>
                                </div>
                                <p className="mb-0">25m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Webmaster Tool</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Featured Contents on Channel</span>
                                </div>
                                <p className="mb-0">32m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-play me-0"></i>
                                        </a>
                                    </div>
                                    <div className="row g-sm-0 align-items-center">
                                        <div className="col-sm-6">
                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Managing Comments</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">20m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-play me-0"></i>
                                        </a>
                                    </div>
                                    <div className="row g-sm-0 align-items-center">
                                        <div className="col-sm-6">
                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Channel Analytics</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">18m 20s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-8">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                            Why SEO
												<span className="small ms-0 ms-sm-2">(8 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Understanding SEO</span>
                                </div>
                                <p className="mb-0">20m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">On-Page SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Local SEO</span>
                                </div>
                                <p className="mb-0">16m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring SEO Effectiveness</span>
                                </div>
                                <p className="mb-0">12m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-play me-0"></i>
                                        </a>
                                    </div>
                                    <div className="row g-sm-0 align-items-center">
                                        <div className="col-sm-6">
                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Keywords in Blog and Articles</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">15m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-play me-0"></i>
                                        </a>
                                    </div>
                                    <div className="row g-sm-0 align-items-center">
                                        <div className="col-sm-6">
                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">SEO Keyword Planning</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">36m 12s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-9">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                            Google tag manager
												<span className="small ms-0 ms-sm-2">(4 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">G+ Pages Ranks Higher</span>
                                </div>
                                <p className="mb-0">13m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Adding Contact Links</span>
                                </div>
                                <p className="mb-0 text-truncate">7m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Google Hangouts</span>
                                </div>
                                <p className="mb-0">12m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px"> Google Local Business</span>
                                </div>
                                <p className="mb-0 text-truncate">7m 20s</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="accordion-item mb-0">
                    <h6 className="accordion-header font-base" id="heading-10">
                        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
                            Integration with Website
												<span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                        </button>
                    </h6>
                    <div id="collapse-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionExample2">

                        <div className="accordion-body mt-3">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating LinkedIn Account</span>
                                </div>
                                <p className="mb-0 text-truncate">13m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Advance Searching</span>
                                </div>
                                <p className="mb-0">31m 20s</p>
                            </div>

                            <hr />


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                        <i className="fas fa-play me-0"></i>
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">LinkedIn Mobile App</span>
                                </div>
                                <p className="mb-0 text-truncate">25m 20s</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TabCurriculum;


