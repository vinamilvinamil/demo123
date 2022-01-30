import React, { useContext, useState, useEffect } from 'react'

import { DataContext } from '../store/GlobalStore'
import Cookie from 'js-cookie';
import { removeCookies, setCookies } from '../utils/commonFunctions'
import { handleFetchData, getData } from '../utils/fetchData'
const TopBar = () => {
    const [state, dispatch] = useContext(DataContext);
    const [user, setUser] = useState({});
    const { auth} = state;
    const [menuClosed, setMemuClosed] = useState(true);
    const handleLogout = async () => {
        
        const token = localStorage.getItem('accessToken');
        await handleFetchData(dispatch, getData, ['auth/signout', null, token], false, false)
        removeCookies('refreshtoken');
        removeCookies('_atc');
        removeCookies('accessToken')
        setCookies('refreshtoken', '')
        setCookies('accessToken', '');
        setCookies('_atc', '');
        localStorage.removeItem('firstLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        dispatch({
            type: 'AUTH',
            payload: {}
        })

        dispatch({
            type: 'NOTIFY',
            payload: { success: 'Logged out!!' }
        })
        window.location.href = '/';
    }

    const showMenuBar = () => {
        dispatch({
            type: 'MENU'
        })
    }

    useEffect(() => {
        if(localStorage) {
            const userLocal = JSON.parse(localStorage.getItem('user'));
            setUser(userLocal);
        }
    }, [])

    return (
        <nav className="top-bar navbar-light border-bottom py-0 py-xl-3">
            <div className="container-fluid p-0">
                <div className="d-flex align-items-center w-100">
                    <div className="d-flex align-items-center d-xl-none">
                        <a className="navbar-brand" href="https://eduport.webestica.com/index.html">
                            <img className="light-mode-item navbar-brand-item h-30px" src="/Eduport - LMS, Education and Course Theme_files/logo-mobile.svg" alt="" />
                            <img className="dark-mode-item navbar-brand-item h-30px" src="/Eduport - LMS, Education and Course Theme_files/logo-mobile-light.svg" alt="" />
                        </a>
                    </div>

                    <div className="navbar-expand-xl sidebar-offcanvas-menu">
                        <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="outside" 
                        onClick={() => showMenuBar()}>
                            <i className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu"> </i>
                        </button>
                    </div>

                    <div className="navbar-expand-lg ms-auto ms-xl-0">
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopContent" aria-controls="navbarTopContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse w-100" id="navbarTopContent">

                            <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                                <div className="nav-item w-100">
                                    <form className="position-relative">
                                        <input className="form-control pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 text-primary"></i></button>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="ms-xl-auto">
                        <ul className="navbar-nav flex-row align-items-center">

                            <li className="nav-item ms-2 ms-md-3 dropdown">

                                <a className="btn btn-light btn-round mb-0" href="https://eduport.webestica.com/admin-dashboard.html#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                                    
                                >
                                    <i className="bi bi-bell fa-fw"></i>
                                </a>

                                <span className="notif-badge animation-blink"></span>


                                <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                                    <div className="card bg-transparent">
                                        <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                                            <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                                            <a className="small" href="https://eduport.webestica.com/admin-dashboard.html#">Clear all</a>
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="list-group list-unstyled list-group-flush">

                                                <li>
                                                    <a href="https://eduport.webestica.com/admin-dashboard.html#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                        <div className="me-3">
                                                            <div className="avatar avatar-md">
                                                                <img className="avatar-img rounded-circle" src="/Eduport - LMS, Education and Course Theme_files/08.jpg" alt="avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-body small m-0">Congratulate <b>Joan Wallace</b> for graduating from <b>Microverse university</b></p>
                                                            <u className="small">Say congrats</u>
                                                        </div>
                                                    </a>
                                                </li>


                                                <li>
                                                    <a href="https://eduport.webestica.com/admin-dashboard.html#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                        <div className="me-3">
                                                            <div className="avatar avatar-md">
                                                                <img className="avatar-img rounded-circle" src="/Eduport - LMS, Education and Course Theme_files/02.jpg" alt="avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">Larry Lawson Added a new course</h6>
                                                            <p className="small text-body m-0">What&apos;s new! Find out about new features</p>
                                                            <u className="small">View detail</u>
                                                        </div>
                                                    </a>
                                                </li>


                                                <li>
                                                    <a href="https://eduport.webestica.com/admin-dashboard.html#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                        <div className="me-3">
                                                            <div className="avatar avatar-md">
                                                                <img className="avatar-img rounded-circle" src="/Eduport - LMS, Education and Course Theme_files/05.jpg" alt="avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">New request to apply for Instructor</h6>
                                                            <u className="small">View detail</u>
                                                        </div>
                                                    </a>
                                                </li>


                                                <li>
                                                    <a href="https://eduport.webestica.com/admin-dashboard.html#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                        <div className="me-3">
                                                            <div className="avatar avatar-md">
                                                                <img className="avatar-img rounded-circle" src="/Eduport - LMS, Education and Course Theme_files/03.jpg" alt="avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">Update v2.3 completed successfully</h6>
                                                            <p className="small text-body m-0">What&apos;s new! Find out about new features</p>
                                                            <small className="text-body">5 min ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                                            <a href="https://eduport.webestica.com/admin-dashboard.html#" className="stretched-link">See all incoming activity</a>
                                        </div>
                                    </div>
                                </div>

                            </li>



                            <li className="nav-item ms-2 ms-md-3 dropdown">

                                <a className="avatar avatar-sm p-0" href="https://eduport.webestica.com/admin-dashboard.html#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false"
                                onClick={() => showMenuBar()}>
                                    <img className="avatar-img rounded-circle" src="/Eduport - LMS, Education and Course Theme_files/01.jpg" alt="avatar" />
                                </a>


                                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                                    <li className="px-3">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-3">
                                                <img className="avatar-img rounded-circle shadow" src="/Eduport - LMS, Education and Course Theme_files/01.jpg" alt="avatar" />
                                            </div>
                                            <div>
                                                <a className="h6 mt-2 mt-sm-0" href="https://eduport.webestica.com/admin-dashboard.html#">{user.name || ''}</a>
                                                <p className="small m-0">{user.email || ''}</p>
                                            </div>
                                        </div>

                                    </li>


                                    <li><a className="dropdown-item" href="https://eduport.webestica.com/admin-dashboard.html#"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                                    <li><a className="dropdown-item" href="https://eduport.webestica.com/admin-dashboard.html#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                                    <li><a className="dropdown-item" href="https://eduport.webestica.com/admin-dashboard.html#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                                    <li><a className="dropdown-item bg-danger-soft-hover" onClick={() => handleLogout()}><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>

                                </ul>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </nav>


    )
}

export default TopBar;