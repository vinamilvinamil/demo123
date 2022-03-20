import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { DataContext } from '../store/GlobalStore'
import Cookie from 'js-cookie';
import { removeCookies, setCookies } from '../utils/commonFunctions'
import { handleFetchData, getData } from '../utils/fetchData'

const NavBar = ({ menus }) => {
    const router = useRouter()
    const [state, dispatch] = useContext(DataContext);
    const [menuActive, setMemuActive] = useState('');

    const { auth, cart } = state;
    const isActive = (r) => {
        if (r === router.pathname) {
            return 'active'
        } else {
            return ''
        }
    }

    const handleLogout = async () => {
        removeCookies('refreshtoken');
        removeCookies('_atc');
        setCookies('refreshtoken', '')
        //document.cookie = '_atc=' + encode;
        //const encode = XORCipher.encode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, data.access_token) 
        // Cookie.set('_atc', encode, {
        //     domain: process.env.DOMAIN
        // })
        setCookies('_atc', '');
        localStorage.removeItem('firstLogin');
        localStorage.removeItem('accessToken')
        const token = state.auth.token;
        await handleFetchData(dispatch, getData, ['auth/signout', null, token], false, false)
        dispatch({
            type: 'AUTH',
            payload: {}
        })

        dispatch({
            type: 'NOTIFY',
            payload: { success: 'Logged out!!' }
        })

    }
    const loggedRouter = () => {
        return <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {auth.user.avatar && <Image alt='' width={30} height={30} src={auth.user.avatar || process.env.NEXT_PUBLIC_DEFAULT_IMAGE} style={{
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    transform: 'translateY(-3px)',
                    marginRight: '3px'
                }} />}
                {auth.user.name}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Profile</a>
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
        </li>
    }


    const renderMenu = (menu, levelMenu) => {
        // console.log(menu);
        if (!menu || !menu.length) return <div></div>;
        //render level 1
        if (levelMenu == 0) {
            return (
                <ul className="navbar-nav navbar-nav-scroll mx-auto">
                    {
                        menu.map((item1, key1) => {
                            const length = (item1.content || []).length;
                            return (
                                <li className={`nav-item dropdown`} key={key1}>
                                    {
                                        length > 0 ?
                                            <a className={`nav-link dropdown-toggle ${item1.active ? 'active' : ''}`} href={item1.link} id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item1.title}</a>
                                            :

                                            <a href={item1.link} className={`nav-link dropdown-toggle ${item1.active ? 'active' : ''}`} id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item1.title}</a>

                                    }
                                    {
                                        length > 0 ?
                                            renderMenu(item1.content, levelMenu + 1)
                                            : null
                                    }

                                </li>
                            )
                        })
                    }
                </ul>
            )
        } else if (levelMenu == 1) {
            return (
                <ul className="dropdown-menu">
                    {
                        (menu || []).map((item1, key1) => {
                            const length = (item1.content || []).length;

                            return (
                                <React.Fragment key={key1}>
                                    {
                                        length == 0 ?
                                            (
                                                <li >

                                                    <a href={item1.link} className={`dropdown-item ${item1.active ? 'active' : ''}`} >
                                                        {item1.title}
                                                    </a>

                                                </li>
                                            )
                                            : (
                                                <li className={`dropdown-submenu dropend`}>
                                                    <a className={`dropdown-item dropdown-toggle ${item1.active ? 'active' : ''}`} href="https://eduport.webestica.com/#">{item1.title}</a>
                                                    {
                                                        renderMenu(item1.content, levelMenu + 1)
                                                    }

                                                </li>
                                            )
                                    }
                                    {
                                        item1.hasDivided ? <li> <hr className="dropdown-divider" /></li> : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            )
        } else if (levelMenu == 2) {
            return (
                <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    {
                        menu.map((item1, key1) => {
                            return (
                                <React.Fragment key={key1}>
                                    <li>
                                        <Link href={item1.link}>
                                            <a className={`dropdown-item ${item1.active ? 'active' : ''}`} >
                                                {item1.title}
                                            </a>
                                        </Link>
                                    </li>
                                    {
                                        item1.hasDivided ? <li> <hr className="dropdown-divider" /></li> : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            )
        }

    }

    const menuAbc = React.useMemo(() => {
        return renderMenu(menus, 0);
    }, [menus]);
    return (
        <div>
            <header className="navbar-light navbar-sticky header-static">
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid px-3 px-xl-5">
                        <Link href="/">
                            <a className="navbar-brand" >
                                <img className="light-mode-item navbar-brand-item" src="/Eduport - LMS, Education and Course Theme_files/logo.svg" alt="logo" />
                                <img className="dark-mode-item navbar-brand-item" src="/Eduport - LMS, Education and Course Theme_files/logo-light.svg" alt="logo" />
                            </a>
                        </Link>

                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>


                        <div className="navbar-collapse w-100 collapse" id="navbarCollapse">


                            {/* {
                                renderMenu(menus, 0)
                            } */
                                menuAbc
                            }

                            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                                <div className="nav-item w-100">
                                    <form className="position-relative">
                                        <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown ms-1 ms-lg-0">
                                <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="avatar-img rounded-circle" src="/Eduport%20-%20LMS,%20Education%20and%20Course%20Theme_files/01.jpg" alt="avatar" />
                                </a>
                                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                                    <li className="px-3">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-3">
                                                <img className="avatar-img rounded-circle shadow" src="/Eduport%20-%20LMS,%20Education%20and%20Course%20Theme_files/01.jpg" alt="avatar" />
                                            </div>
                                            <div>
                                                <a className="h6" href="#">Lori Ferguson</a>
                                                <p className="small m-0">example@gmail.com</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </li>

                                    <li> <Link href="/product"><a className="dropdown-item" ><i className="bi bi-person fa-fw me-2"></i>My Profile</a></Link></li>
                                    <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                                    

                                    

                                </ul>
                            </div>

                        </div>



                    </div>
                </nav>
            </header>
            <div id="sticky-space"></div>
        </div>
    )
}

export default NavBar;