import { useState, useEffect } from 'react'
const Admin = (props) => {

    return (
        <div className="page-content-wrapper border">
            <div className="row">
                <div className="col-12 mb-3">
                    <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
                </div>
            </div>
            <div className="row g-4 mb-4">

                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">

                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1958" data-purecounter-delay="200" data-purecounter-duration="0">1958</h2>
                                <span className="mb-0 h6 fw-light">Completed Courses</span>
                            </div>

                            <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fas fa-tv fa-fw"></i></div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">

                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1600" data-purecounter-delay="200" data-purecounter-duration="0">1600</h2>
                                <span className="mb-0 h6 fw-light">Enrolled Courses</span>
                            </div>

                            <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw"></i></div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">

                            <div>
                                <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1235" data-purecounter-delay="200" data-purecounter-duration="0">1235</h2>
                                <span className="mb-0 h6 fw-light">Course In Progress</span>
                            </div>

                            <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw"></i></div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-xxl-3">
                    <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center">

                            <div>
                                <div className="d-flex">
                                    <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="845" data-purecounter-delay="200" data-purecounter-duration="0">845</h2>
                                    <span className="mb-0 h2 ms-1">hrs</span>
                                </div>
                                <span className="mb-0 h6 fw-light">Total Watch Time</span>
                            </div>

                            <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="bi bi-stopwatch-fill fa-fw"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 mb-4">


                <div className="col-xxl-8">
                    <div className="card shadow h-100">


                        <div className="card-header p-4 border-bottom">
                            <h5 className="card-header-title">Earnings</h5>
                        </div>


                    </div>
                </div>



                <div className="col-xxl-4">
                    <div className="card shadow h-100">

                        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                            <h5 className="card-header-title">Support Requests</h5>
                            <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-link p-0 mb-0">View all</a>
                        </div>


                        <div className="card-body p-4">


                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/09.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Lori Stevens</a></h6>
                                        <p className="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>
                                        <span className="small">8 hour ago</span>
                                    </div>
                                </div>
                            </div>





                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <div className="avatar-img rounded-circle bg-purple bg-opacity-10">
                                            <span className="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>
                                        </div>
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Dennis Barrett</a></h6>
                                        <p className="mb-0">Comment from Billy Vasquez on ticket #659</p>
                                        <span className="small">8 hour ago</span>
                                    </div>
                                </div>
                            </div>





                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <div className="avatar-img rounded-circle bg-orange bg-opacity-10">
                                            <span className="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                        </div>
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Dennis Barrett</a></h6>
                                        <p className="mb-0"><b>Webestica</b> assign you a new ticket for <b>Eduport theme</b></p>
                                        <span className="small">5 hour ago</span>
                                    </div>
                                </div>
                            </div>





                            <div className="d-flex justify-content-between position-relative">
                                <div className="d-sm-flex">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/04.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Dennis Barrett</a></h6>
                                        <p className="mb-0">Thanks for contact us with your issues.</p>
                                        <span className="small">9 hour ago</span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

            <div className="row g-4">

                <div className="col-lg-6 col-xxl-4">
                    <div className="card shadow h-100">
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                            <h5 className="card-header-title">Top Instructors</h5>
                            <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-link p-0 mb-0">View all</a>
                        </div>

                        <div className="card-body p-4">

                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/09.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-1">Lori Stevens<i className="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                        <ul className="list-inline mb-0 small">
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1"></i>25 Courses</li>
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-sm btn-light mb-0">View</a>
                            </div>

                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/03.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-1">Dennis Barrett</h6>
                                        <ul className="list-inline mb-0 small">
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1"></i>18 Courses</li>
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-sm btn-light mb-0">View</a>
                            </div>

                            <div className="d-sm-flex justify-content-between align-items-center">
                                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/01.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-1">Jacqueline Miller<i className="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                        <ul className="list-inline mb-0 small">
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1"></i>21 Courses</li>
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1"></i>4.8/5.0</li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-sm btn-light mb-0">View</a>
                            </div>

                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/04.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-1">Billy Vasquez</h6>
                                        <ul className="list-inline mb-0 small">
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1"></i>15 Courses</li>
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-sm btn-light mb-0">View</a>
                            </div>

                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                                    <div className="avatar avatar-md flex-shrink-0">
                                        <img className="avatar-img rounded-circle" src="./Eduport - LMS, Education and Course Theme_files/05.jpg" alt="avatar" />
                                    </div>

                                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                        <h6 className="mb-1">Amanda Reed<i className="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                        <ul className="list-inline mb-0 small">
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1"></i>29 Courses</li>
                                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-sm btn-light mb-0">View</a>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="card shadow h-100">

                        <div className="card-header border-bottom p-4">
                            <h5 className="card-header-title">Notice board</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="custom-scrollbar h-300px os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                                <div className="os-resize-observer-host observed">
                                    <div className="os-resize-observer" style={{ left: 0, right: 'auto' }}>
                                    </div>
                                </div>
                                <div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}>
                                    <div className="os-resize-observer">
                                    </div>
                                </div>
                                <div className="os-content-glue" style={{ margin: 0, width: '292px', height: '299px' }}>
                                </div>
                                <div className="os-padding">
                                    <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid" style={{ overflowY: 'scroll' }}>
                                        <div className="os-content" style={{ width: '100%', height: '100%', padding: 0 }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        <div className="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0"><i className="fas fa-user-tie fs-5"></i></div>

                                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Join New Instructor</a></h6>
                                            <p className="mb-0">Amongst moments do in arrived Fat weddings believed prospect</p>
                                            <span className="small">5 min ago</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0"><i className="fas fa-book-open fs-5"></i></div>

                                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Update New Course</a></h6>
                                            <p className="mb-0">Arrived Fat weddings believed prospect</p>
                                            <span className="small">4 hour ago</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        <div className="icon-lg bg-info bg-opacity-10 text-info rounded-2 flex-shrink-0"><i className="fas fa-book fs-5"></i></div>

                                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Update Syllabus</a></h6>
                                            <p className="mb-0">Arrived Fat weddings believed prospect</p>
                                            <span className="small">2 days ago</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0"><i className="fas fa-globe fs-5"></i></div>

                                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">Update New Feature</a></h6>
                                            <p className="mb-0">Arrived Fat weddings believed prospect</p>
                                            <span className="small">3 days ago</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                                <div className="os-scrollbar-track os-scrollbar-track-off">
                                    <div className="os-scrollbar-handle" style={{ width: '100%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                                <div className="os-scrollbar-track os-scrollbar-track-off">
                                    <div className="os-scrollbar-handle" style={{ width: '67.56%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="os-scrollbar-corner">
                            </div>
                        </div>

                        <div className="card-footer border-top">
                            <div className="alert alert-success d-flex align-items-center mb-0 py-2">
                                <div>
                                    <small className="mb-0">45 more notices listed</small>
                                </div>
                                <div className="ms-auto">
                                    <a className="btn btn-sm btn-success-soft mb-0" href="https://eduport.webestica.com/admin-dashboard.html#!"> View all </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="card shadow h-100">

                        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                            <h5 className="card-header-title">Traffic Sources</h5>
                            <a href="https://eduport.webestica.com/admin-dashboard.html#" className="btn btn-link p-0 mb-0">View all</a>
                        </div>

                        <div className="card-body p-4">

                            <div className="col-sm-6 mx-auto" style={{ position: 'relative' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Admin
