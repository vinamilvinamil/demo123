import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalStore';
import Cookie from 'js-cookie';
import { postData, handleFetchData } from '../../utils/fetchData';
import { useRouter } from 'next/router'
import { XORCipher, setCookies, removeCookies, showLog, valid } from '../../utils/commonFunctions'

const UserLogin = () => {

    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const [state, dispatch] = useContext(DataContext);
    const { auth } = state;
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(auth).length != 0) window.location.href = '/';
    }, [auth])

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await handleFetchData(dispatch, postData, ['user/signin', userData], true, true)
        if (!data) return;

        dispatch({
            type: 'AUTH', payload: {
                token: data.access_token,
                user: data.user
            }
        })
        showLog('signin', data.user);
        setCookies('refreshtoken', data.refresh_token, 7)
        setCookies('accessToken', data.access_token);
        //document.cookie = '_atc=' + encode;
        //const encode = XORCipher.encode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, data.access_token) 
        // Cookie.set('_atc', encode, {
        //     domain: process.env.DOMAIN
        // })
        setCookies('_atc', data.access_token);
        localStorage.setItem('firstLogin', true)
        //localStorage.setItem('accessToken', data.access_token)
        localStorage.setItem('role', 'user');
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('root', false);
    }


    return (
        <div>
            <Head>
                <title>Sign in Page</title>
            </Head>

            <section className="p-0 d-flex align-items-center position-relative overflow-hidden">

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                            <div className="p-3 p-lg-5">

                                <div className="text-center">
                                    <h2 className="fw-bold">Welcome to our largest community</h2>
                                    <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                                </div>

                                <img src="/assets/images/02.svg" className="mt-5" alt="" />


                            </div>
                        </div>


                        <div className="col-12 col-lg-6 m-auto">
                            <div className="row my-5">
                                <div className="col-sm-10 col-xl-8 m-auto">

                                    <span className="mb-0 fs-1">👋</span>
                                    <h1 className="fs-2">Login into Eduport!</h1>
                                    <p className="lead mb-4">Nice to see you! Please log in with your account.</p>


                                    <form >

                                        <div className="mb-4">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                <input type="email" name = 'email' className="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1" 
                                                value = {email} onChange={handleChangeInput}/>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="inputPassword5" className="form-label">Password *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                                <input type="password" name = 'password' className="form-control border-0 bg-light rounded-end ps-1" placeholder="password" id="inputPassword5" 
                                                value={password} onChange={handleChangeInput}/>
                                            </div>
                                            <div id="passwordHelpBlock" className="form-text">
                                                Your password must be 8 characters at least
									</div>
                                        </div>

                                        <div className="mb-4 d-flex justify-content-between mb-4">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="text-primary-hover">
                                                <a href="forgot-password.html" className="text-secondary">
                                                    <u>Forgot password?</u>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="align-items-center mt-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary mb-0" type="button"
                                                onClick={(e) => handleSubmit(e)}>Login</button>
                                            </div>
                                        </div>
                                    </form>






                                    <div className="mt-4 text-center">
                                        <span>Don't have an account? <a href="/signup">Signup here</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserLogin