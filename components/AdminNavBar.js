import React, { useContext, useState } from 'react'
import Link from 'next/link'
const NavBar = () => {

    return (
        <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
            <div className="d-flex align-items-center">
                <Link href="/admin">
                    <a className="navbar-brand" >
                        <img className="navbar-brand-item" src="/Eduport - LMS, Education and Course Theme_files/logo-light.svg" alt="" />
                    </a>
                </Link>
            </div>

            <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100 os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y" data-bs-backdrop="true" tabIndex="-1" id="offcanvasSidebar">
                <div className="os-resize-observer-host observed">
                    <div className="os-resize-observer" style={{ left: 0, right: 'auto' }}>
                    </div>
                </div>
                <div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}>
                    <div className="os-resize-observer">
                    </div>
                </div>

                <div className="os-padding">
                    <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid" tabIndex="-1" style={{ overflowY: 'scroll' }}>
                        <div className="os-content" style={{ width: '100%', height: '100%', padding: 0, float: 'left' }}>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
                    <ul className="navbar-nav flex-column" id="navbar-sidebar">

                        <li className="nav-item ms-2 my-2">Pages</li>


                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="https://eduport.webestica.com/admin-dashboard.html#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                                <i className="bi bi-basket fa-fw me-2"></i>Courses
                         </a>

                            <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                                <li className="nav-item"> <Link  href="/admin/courses"><a className="nav-link">All Courses</a></Link></li>
                                <li className="nav-item"> <Link href='/admin/courses-category'><a className="nav-link" >Course Category</a></Link></li>
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-course-detail.html">Course Detail</a></li>
                            </ul>
                        </li>


                        <li className="nav-item"> 
                        <Link href="/admin/user">
                            <a className="nav-link" ><i className="fas fa-user-graduate fa-fw me-2"></i>User</a>
                        </Link>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="https://eduport.webestica.com/admin-dashboard.html#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                                <i className="fas fa-user-tie fa-fw me-2"></i>Instructors
                          </a>

                            <ul className="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-instructor-list.html">Instructors</a></li>
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-instructor-detail.html">Instructor Detail</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://eduport.webestica.com/admin-instructor-request.html">Instructor requests
                            <span className="badge bg-success text-white rounded-circle ms-2">2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-review.html"><i className="far fa-comment-dots fa-fw me-2"></i>Reviews</a></li>


                        <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-earning.html"><i className="far fa-chart-bar fa-fw me-2"></i>Earnings</a></li>


                        <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-setting.html"><i className="fas fa-user-cog fa-fw me-2"></i>Admin Settings</a></li>


                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" href="https://eduport.webestica.com/admin-dashboard.html#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                                <i className="bi bi-lock fa-fw me-2"></i>Authentication
                </a>

                            <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/sign-up.html">Sign Up</a></li>
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/sign-in.html">Sign In</a></li>
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/forgot-password.html">Forgot Password</a></li>
                                <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/admin-error-404.html">Error 404</a></li>
                            </ul>
                        </li>


                        <li className="nav-item ms-2 my-2">Documentation</li>


                        <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/docs/index.html"><i className="far fa-clipboard fa-fw me-2"></i>Documentation</a></li>


                        <li className="nav-item"> <a className="nav-link" href="https://eduport.webestica.com/docs/changelog.html"><i className="fas fa-sitemap fa-fw me-2"></i>Changelog</a></li>
                    </ul>
                    <div className="px-3 mt-auto pt-3">
                        <div className="d-flex align-items-center justify-content-between text-primary-hover">
                            <a className="h5 mb-0 text-body" href="https://eduport.webestica.com/admin-setting.html" data-bs-placement="top" title="" data-bs-original-title="Settings">
                                <i className="bi bi-gear-fill"></i>
                            </a>
                            <a className="h5 mb-0 text-body" href="https://eduport.webestica.com/index.html" data-bs-placement="top" title="" data-bs-original-title="Home">
                                <i className="bi bi-globe"></i>
                            </a>
                            <a className="h5 mb-0 text-body" href="https://eduport.webestica.com/sign-in.html" data-bs-placement="top" title="" data-bs-original-title="Sign out">
                                <i className="bi bi-power"></i>
                            </a>
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
                    <div className="os-scrollbar-handle" style={{ height: '54%' }}>
                    </div>

                </div>
            </div>
            <div className="os-scrollbar-corner">
            </div>
        </nav>




    )
}

export default NavBar;