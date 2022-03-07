import { useContext, useEffect, useState } from 'react'
import { convertLongToHourMinute, slug } from '../../utils/commonFunctions';
import Link from 'next/link'

const DetailCourseCategory = (props) => {
    const defaultSize = 12;
    const category = props.data?.data?.category || {};
    const total = props.data?.total;
    const courses = props.data?.data?.courses || [];
    console.log(courses);
    return (
        <main>
            <section className="bg-blue align-items-center d-flex" style={{ backgroundImage: 'url(/assets/images/pattern/04.png)', backgroundSize: 'cover' }}>
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

                                {
                                    courses?.map((item, index) => {
                                        return (
                                            <div className="col-sm-6 col-xl-4" key={index}>
                                                <div className="card shadow h-100">

                                                    <img src={item.thumbnail || "/assets/images/08.jpeg"} className="card-img-top" alt="course image" />

                                                    <div className="card-body pb-0">

                                                        <div className="d-flex justify-content-between mb-2">

                                                            {
                                                                item.level == 0 ?
                                                                    <a href="#" className=" badge bg-primary text-white">Beginner</a>
                                                                : item.level == 1 ?
                                                                    <a href="#" className=" badge bg-purple text-white">Intermediate</a>
                                                                : item.level == 2 ?
                                                                    <a href="#" className=" badge bg-dark text-white">Advanced</a>
                                                                : item.level == 3 ?
                                                                    <a href="#" className="badge bg-orange text-white">All level</a>
                                                                : null
                                                            }
                                                            <a href="#" className="h5 text-success mb-0">${item.price}</a>
                                                            {/* <a href="#" className="h6 text-success mb-0"><i className="far fa-heart"></i></a> */}
                                                        </div>

                                                        <h5 className="card-title"><a href={`/course-detail/${slug(item.title)}-${ item._id}`}>{item.title}</a></h5>
                                                        <p className="mb-2 text-truncate-2">{item.shortDescription}</p>

                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">{item.rate}/5.0</li>
                                                        </ul>
                                                    </div>

                                                    <div className="card-footer pt-0 pb-3">
                                                        <hr />
                                                        <div className="d-flex justify-content-between">
                                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{convertLongToHourMinute(item.time)}</span>
                                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>{item.lecture} lectures</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }





                            </div>
                            {
                                total > defaultSize ?
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
                                    : null
                            }


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
