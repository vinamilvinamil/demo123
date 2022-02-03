import { useContext, useEffect, useState } from 'react'

const DetailCourseCategory = (props) => {
    const category = props.data?.data?.category || {};
    return (
        <main>
            <section className="bg-blue align-items-center d-flex" style={{backgroundImage:'url(/assets/images/pattern/04.png)', backgroundSize:'cover'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">

                            <h1 className="text-white">{category.title}</h1>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row mb-4 align-items-center">
                                <div className="col-xl-12">
                                    <form className="border rounded p-2">
                                        <div className="input-group input-borderless">
                                            <input className="form-control me-1" type="search" placeholder="Find your course" />
                                            <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                               
                            </div>
                            <div className="row g-4">


                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/08.jpeg" className="card-img-top" alt="course image" />

                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Sketch from A to Z: for app designer</a></h5>
                                            <p className="mb-2 text-truncate-2">Proposal indulged no do sociable he throwing settling.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 56m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>15 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/01.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Graphic Design Masterclass</a></h5>
                                            <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>9h 56m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/03.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Create a Design System in Figma</a></h5>
                                            <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>5h 56m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>32 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/07.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Deep Learning with React-Native </a></h5>
                                            <p className="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>18h 56m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>99 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/10.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                                <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Build Responsive Websites with HTML</a></h5>
                                            <p className="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>15h 30m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>68 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/08.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Build Websites with CSS</a></h5>
                                            <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>36h 30m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>72 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/05.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">The Complete Web Development in python</a></h5>
                                            <p className="text-truncate-2 mb-2">Mention Mr manners opinion if garrets enabled.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>10h 00m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>26 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/06.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Angular – The Complete Guider</a></h5>
                                            <p className="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>9h 32m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>42 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-xl-4">
                                    <div className="card shadow h-100">

                                        <img src="/assets/images/10.jpeg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                                                <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title"><a href="#">Bootstrap 5 From Scratch</a></h5>
                                            <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>25h 56m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>38 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="col-12">
                                <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                                    <ul className="pagination pagination-primary-soft rounded mb-0">
                                        <li className="page-item mb-0"><a className="page-link" href="#" tabIndex="-1"><i className="fas fa-angle-double-left"></i></a></li>
                                        <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
                                        <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
                                        <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-3 pt-5 pt-lg-0">

                            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header bg-light">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body p-3 p-lg-0">
                                        <form>


                                            <div className="card card-body shadow p-4 mb-4">

                                                <h4 className="mb-3">Price Level</h4>
                                                <ul className="list-inline mb-0">

                                                    <li className="list-inline-item">
                                                        <input type="radio" className="btn-check" name="options" id="option1" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="option1">All</label>
                                                    </li>

                                                    <li className="list-inline-item">
                                                        <input type="radio" className="btn-check" name="options" id="option2" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="option2">Free</label>
                                                    </li>

                                                    <li className="list-inline-item">
                                                        <input type="radio" className="btn-check" name="options" id="option3" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="option3">Paid</label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="card card-body shadow p-4 mb-4">

                                                <h4 className="mb-3">Skill level</h4>
                                                <ul className="list-inline mb-0">

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-12" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-12">All levels</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-9" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-9">Beginner</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-10" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-10">Intermediate</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-11" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-11">Advanced</label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="card card-body shadow p-4 mb-4">

                                                <h4 className="mb-3">Language</h4>
                                                <ul className="list-inline mb-0 g-3">

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-2" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-2">English</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-3" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-3">Francas</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-4" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-4">Hindi</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-5" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-5">Russian</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-6" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-6">Spanish</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-7" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-7">Bengali</label>
                                                    </li>

                                                    <li className="list-inline-item mb-2">
                                                        <input type="checkbox" className="btn-check" id="btn-check-8" />
                                                        <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-8">Portuguese</label>
                                                    </li>
                                                </ul>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="d-grid p-2 p-lg-0 text-center">
                                        <button className="btn btn-primary mb-0">Filter Results</button>
                                    </div>

                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default DetailCourseCategory;

const songs = [
    {
        url: `https://archive.org/download/doc-vi-bat-ky-ai-david-j.-lieberman-sachnoi.cc/%C4%90o%CC%A3c%20Vi%CC%A3%20Ba%CC%82%CC%81t%20Ky%CC%80%20Ai%20-%20David%20J.%20Lieberman%20-%201.mp3`,
        cover:
            'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpeg',
        artist: {
            name: 'Redfoo',
            song: 'New Thang',
        },
    },
    {
        url: 'http://claymore.france.free.fr/momo/summer love.mp3',
        cover:
            'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpeg',
        artist: {
            name: 'Justin Timberlake',
            song: 'Summer Love',
        },
    },
    {
        url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
        cover:
            'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpeg',
        artist: {
            name: 'Daft Punk',
            song: 'Get Lucky',
        },
    },
    {
        url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
        artist: {
            name: 'Michael Buble',
            song: 'Feeling Good',
        },
    },
    {
        url:
            'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
        cover:
            'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpeg',
        artist: {
            name: 'The Weekend',
            song: "Can't Fell My Face",
        },
    },
    {
        url:
            'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
        cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
        artist: {
            name: 'Metallica',
            song: 'Fuel',
        },
    },
];