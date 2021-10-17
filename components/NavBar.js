import React, {useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import {DataContext} from '../store/GlobalStore'
import Cookie from 'js-cookie';
import {removeCookies} from '../utils/commonFunctions'
const NavBar = () => {
    const router = useRouter()
    const [state, dispatch] = useContext(DataContext);

    const {auth, cart} = state;
    const isActive = (r) => {
        if ( r === router.pathname) {
            return 'active'
        } else {
            return ''
        }
    }

    const handleLogout = () => {
        removeCookies('refreshtoken');
        removeCookies('_atc');
        // Cookie.remove('refreshtoken', {path: 'api/auth/accessToken', domain: process.env.DOMAIN});
        // Cookie.remove('_atc', {
        //     domain: process.env.DOMAIN
        // })
        
        localStorage.removeItem('firstLogin');
        dispatch({
            type: 'AUTH',
            payload: {}
        })

        dispatch({
            type: 'NOTIFY',
            payload: {success: 'Logged out!!'}
        })

    }
    const loggedRouter = () => {
        return <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {auth.user.avatar && <Image alt = '' width={30} height={30} src={auth.user.avatar || process.env.NEXT_PUBLIC_DEFAULT_IMAGE} style={{
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
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand" >{process.env.NEXT_PUBLIC_TITLE}</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav p-1">
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className={`nav-link ${isActive('/cart')}`} >
                                <i className="fas fa-shopping-cart position-relative" aria-hidden='true'>
                                    <span className='position-absolute'
                                    style={{padding:'3px 6px',
                                    background: '#ed143dc2',
                                    borderRadius: '50%',
                                    top: '-10px',
                                    right: '-10px',
                                    color: 'white',
                                    fontSize: '14px'}}>{cart.length}</span>    
                                </i> 
                                Cart
                            </a>
                        </Link>
                    </li>
                    {
                        
                        Object.keys(auth).length == 0 ?
                            <li className="nav-item">
                            <Link href="/signin">
                                <a className={`nav-link ${isActive('/signin')}`} >
                                    <i className="fas fa-user" aria-hidden='true'></i> 
                                    Sign in
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                    

                    {/*  */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;