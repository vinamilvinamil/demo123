import ReactPlayer from 'react-player';

const Product = () => {
    return (
        <section className="py-0  position-relative">

            <div className="row g-0">
                <div className="d-flex">
                    <div className="overflow-hidden fullscreen-video w-100">
                        <div className="rounded-3">
                        {/* <ReactPlayer
                            url='https://drive.google.com/file/d/1-b3VayJCBF81PSAjvU-E8hx1-s-Eb0y9/preview'
                            className='react-player'
                            playing
                            width='100%'
                            height='80vh'
                            controls={true}
                            forceVideo
                            onEnded= {() => alert('ended')}
                            />
                         */}
                        <iframe class="ql-video" width="100%" height="80vh"
                        style={{width: '100%', height: '80vh'}}
                         frameborder="0" allowfullscreen="true" 
                         src="https://drive.google.com/file/d/1-b3VayJCBF81PSAjvU-E8hx1-s-Eb0y9/preview">

                         </iframe>
                         </div>
                    </div>

                    <div className="justify-content-end position-relative">

                        <button className="navbar-toggler btn btn-white mt-4 plyr-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="true" aria-controls="collapseWidthExample">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        <div className="collapse-horizontal collapse show" id="collapseWidthExample">
                            <div className="card vh-100 overflow-auto rounded-0 w-280px w-sm-400px">

                                <div className="card-header bg-light rounded-0">
                                    <h1 className="mt-2 fs-5">The Complete Digital Marketing Course - 12 Courses in 1</h1>
                                    <h6 className="mb-0 fw-normal"><a href="#">By Jacqueline Miller</a></h6>
                                </div>


                                <div className="card-body">
                                    <h5>Course content</h5>
                                    <hr />

                                    <div className="row">
                                        <div className="col-12">

                                            <div className="accordion accordion-flush-light accordion-flush" id="accordionExample">

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span className="mb-0 fw-bold">Introduction of Digital Marketing</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Introduction</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">2m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px"> What is Digital Marketing What is Digital Marketing</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Type of Digital Marketing</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">18m 10s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <span className="mb-0 fw-bold">Customer Life cycle</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Introduction</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">2m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px"> What is Digital Marketing What is Digital Marketing</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Type of Digital Marketing</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">18m 10s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <span className="mb-0 fw-bold">What is Search Engine Optimization(SEO)</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Introduction</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">2m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">How to SEO Optimise Your Homepage</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 00s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">How to Write Title Tags Search Engines Love</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">28m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">SEO Keyword Planning</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">38m 22s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Internal and External Links</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">12m 10s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Measuring SEO Effectiveness</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">35m 10s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <span className="mb-0 fw-bold">YouTube Marketing</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Video Flow</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">25m 5s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Webmaster Tool</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Featured Contents on Channel</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">32m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Managing Comments</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">20m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Channel Analytics</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">18m 20s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            <span className="mb-0 fw-bold">Why SEO</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Understanding SEO</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">20m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">On-Page SEO</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">5m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Local SEO</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">16m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Measuring SEO Effectiveness</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">12m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">SEO Keyword Planning</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">36m 12s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Keywords in Blog and Articles</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Mobile SEO</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">15m 00s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingSix">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            <span className="mb-0 fw-bold">Integration with Website</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body px-3">
                                                            <div className="vstack gap-3">

                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Creating LinkedIn Account</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">13m 20s</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Advance Searching</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">31m 20ss</p>
                                                                </div>


                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="position-relative d-flex align-items-center">
                                                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                            <i className="fas fa-play me-0"></i>
                                                                        </a>
                                                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">LinkedIn Mobile App</span>
                                                                    </div>
                                                                    <p className="mb-0 text-truncate">25m 20s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div className="card-footer">
                                    <div className="d-grid">
                                        <a href="course-detail.html" className="btn btn-primary-soft mb-0">Back to course</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
};

export default Product