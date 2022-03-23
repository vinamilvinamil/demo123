import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalStore';
import { postData, handleFetchData, handleFetchDataWithoutNotify } from '../../utils/fetchData';
import { useRouter } from 'next/router'

const UserLogin = () => {
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setCfpassword] = useState('');
    const [error, setError] = useState({});
    const [state, dispatch] = useContext(DataContext);
    const router = useRouter();

    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
        setCfpassword('');
        setError({});
    }, []);

    const errors = (value) => {
        return <label className="text-danger">{value}</label>
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateData = () => {
        const error = {};
        if(!email) error.email = '* Bắt buộc';
        if(!validateEmail(email)) error.email = '* Định dạng email không đúng'
        if(!password) error.password = '* Bắt buộc';
        if(!name) error.name = '* Bắt buộc';
        if(password !== cfpassword) error.cfpassword = '* Mật khẩu không trùng khớp'
        return error;
    }

    const handleSubmit = async () => {
        const error = validateData();
        if(Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        const data = {
            name: name,
            email: email,
            password: password,
            cf_password: password,
        }
        try{
            const result = await handleFetchData(dispatch, postData, ['user/signup', data], true, true, true) 
            if(result) {
                router.push('/login')
            }
        } catch (e) {
            console.log(e);
        }
       
    }


    return (
        <div>
            <Head>
                <title>Sign up Page</title>
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

                                    <img src="assets/images/03.svg" className="h-40px mb-2" alt="" />
                                    <h2>Sign up for your account!</h2>
                                    <p className="lead mb-4">Nice to see you! Please Sign up with your account.</p>


                                    <form>

                                    <div className="mb-4">
                                            <label htmlFor="exampleInputName1" className="form-label">Username *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="Username" id="exampleInputName1"
                                                    value={name} onChange={(e) => setName(e.target.value)}  />
                                                
                                            </div>
                                            {error.name ? errors(error.name) : null}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1"
                                                    value={email} onChange={(e) => setEmail(e.target.value)}  />
                                                
                                            </div>
                                            {error.email ? errors(error.email) : null}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="inputPassword5" className="form-label">Password *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                                <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="inputPassword5" 
                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                                
                                            </div>
                                            {error.password ? errors(error.password) : null}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="inputPassword6" className="form-label">Confirm Password *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                                <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="inputPassword6" 
                                                value={cfpassword} onChange={(e) => setCfpassword(e.target.value)} />
                                                
                                            </div>
                                            {error.cfpassword ? errors(error.cfpassword) : null}
                                        </div>

                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkbox-1" value={agree} onChange={(e) => setAgree(e.target.checked)}/>
                                                <label className="form-check-label" htmlFor="checkbox-1">By signing up, you agree to the<a href="#"> terms of service</a></label>
                                            </div>
                                        </div>

                                        <div className="align-items-center mt-0">
                                            <div className="d-grid">
                                                <button disabled={!agree} className="btn btn-primary mb-0" type="button" onClick = {() => handleSubmit()}>Sign Up</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-4 text-center">
                                        <span>Already have an account?<a href="/login"> Sign in here</a></span>
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