import { useContext, useEffect, useState } from 'react'
import { convertLongToHourMinute, slug } from '../../utils/commonFunctions';
import Link from 'next/link'
import CourseHeader from './CourseHeader';
import TabOverview from './TabOverview';
import TabCurriculum from './TabCurriculum';

const DetailCourse = (props) => {
    const course = props.data?.course || {};
    //console.log(course);
    const changeTab = () => {

    }
    return (
        <main>
            <CourseHeader course={course} />
            <section className="pb-0 py-lg-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <div className="card shadow rounded-2 p-0">

                                <div className="card-header border-bottom px-4 py-3">
                                    <ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">

                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                            <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Overview</button>
                                        </li>

                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Curriculum</button>
                                        </li>

                                        {/* <li className="nav-item me-2 me-sm-4" role="presentation">
                                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Instructor</button>
                                        </li> */}

                                        {/* <li className="nav-item me-2 me-sm-4" role="presentation">
                                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-4" type="button" role="tab" aria-controls="course-pills-4" aria-selected="false">Reviews</button>
                                        </li> */}

                                        {/* <li className="nav-item me-2 me-sm-4" role="presentation">
                                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-5" type="button" role="tab" aria-controls="course-pills-5" aria-selected="false">FAQs </button>
                                        </li> */}
                                    </ul>
                                </div>

                                <div className="card-body p-4">
                                    <div className="tab-content pt-2" id="course-pills-tabContent">
                                        <TabOverview active={true} course={course} />
                                        <TabCurriculum active={false} course={course} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 pt-5 pt-lg-0">
                            <div className="row mb-5 mb-lg-0">
                                <div className="col-md-6 col-lg-12">

                                    <div className="card shadow p-2 mb-4 z-index-9">
                                        <div className="overflow-hidden rounded-3">
                                            <img src="/assets/images/08.jpeg" className="card-img" alt="course image" />

                                            {
                                                course.video ?
                                                    <>
                                                        <div className="bg-overlay bg-dark opacity-6"></div>
                                                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">

                                                            <div className="m-auto">
                                                                <a href={course.video} className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox="" data-gallery="course-video">
                                                                    <i className="fas fa-play"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : null
                                            }

                                        </div>


                                        <div className="card-body px-3">

                                            <div className="d-flex justify-content-between align-items-center">

                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <h3 className="fw-bold mb-0 me-2">${course.price * (1 - course.discount/100.0)}</h3>
                                                        {
                                                            course.isDiscount == true ?
                                                            <>
                                                             <span className="text-decoration-line-through mb-0 me-2">${course.price}</span>
                                                            <span className="badge bg-orange text-white mb-0">{course.discount}% off</span>
                                                            </>
                                                            : null
                                                        }
                                                       
                                                    </div>
                                                   
                                                </div>


                                                <div className="dropdown">

                                                    <a href="#" className="btn btn-sm btn-light rounded small" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fas fa-fw fa-share-alt"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                                                        <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="mt-3 d-sm-flex justify-content-sm-between">
                                                {/* <a href="#" className="btn btn-outline-primary mb-0">Free trial</a> */}
                                                <a href={`/course-learning/${slug(course.title) + '-' + course._id}`} className="btn btn-success mb-0">Learning course</a>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card card-body shadow p-4 mb-4">

                                        <h4 className="mb-3">This course includes</h4>
                                        <ul className="list-group list-group-borderless">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-book-open text-primary"></i>Lectures</span>
                                                <span>{course.lecture}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-clock text-primary"></i>Duration</span>
                                                <span>{convertLongToHourMinute(course.time)}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-signal text-primary"></i>Skills</span>
                                                <span>Beginner</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-globe text-primary"></i>Language</span>
                                                <span>English</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-user-clock text-primary"></i>Deadline</span>
                                                <span>Nov 30 2021</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-medal text-primary"></i>Certificate</span>
                                                <span>Yes</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailCourse;
