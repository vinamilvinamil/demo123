import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../../store/GlobalStore';
import Cookie from 'js-cookie';
import {postData, handleFetchData} from '../../utils/fetchData';
import {useRouter} from 'next/router'
import {XORCipher, setCookies, removeCookies, showLog, valid} from '../../utils/commonFunctions'

const Signin = () => {

    const initialState = {email: '', password: ''}
    const [userData, setUserData] = useState(initialState);
    const {email,password} = userData;

    const [state, dispatch] = useContext(DataContext);
    const {auth} = state;
    const router = useRouter();

    useEffect(() => {
        if(Object.keys(auth).length != 0) router.push('/')
    }, [auth])

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await handleFetchData(dispatch, postData, ['auth/signin', userData], true, true)
        if(!data) return;
        
        dispatch({type: 'AUTH', payload: {
            token: data.access_token,
            user: data.user
        }})
        showLog('signin', data.user);
        setCookies('refreshtoken', data.refresh_token, 7)
        //document.cookie = '_atc=' + encode;
        const encode = XORCipher.encode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, data.access_token) 
        // Cookie.set('_atc', encode, {
        //     domain: process.env.DOMAIN
        // })
        setCookies('_atc', encode);
        localStorage.setItem('firstLogin', true )
    }


    return (
        <div>
            <Head>
                <title>Sign in Page</title>
            </Head>

            <form className='mx-auto my-4' style={{maxWidth: '500px'}} onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        name = 'email' value = {email} onChange={handleChangeInput}/>
                    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        name = 'password' value={password} onChange={handleChangeInput}/>
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>
                <p className='my-2'>
                    You dont have an account ? 
                    <Link  href= '/register'><a style={{color: 'crimson'}}> Register</a></Link>
                </p>
            </form>
        </div>
    )
}

export default Signin