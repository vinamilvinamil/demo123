import React, { useEffect, useState } from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const Modal = ({ show, modalTitle, onClose, onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setCfpassword] = useState('');
    const [error, setError] = useState({});

    useEffect(() => {
        setFullName('');
        setEmail('');
        setPassword('');
        setCfpassword('');
        setError({});
    }, [show]);
    const validateData = () => {
        const error = {};
        if(!fullName) error.fullName = '* Bat buoc'
        if(!email) error.email = '* Bat buoc';
        if(!password) error.password = '* Bat buoc';
        if(password !== cfpassword) error.cfpassword = '* Password khong trung khop'
        return error;
    }

    const handleSubmit = () => {
        const error = validateData();
        if(Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        const data = {
            name: fullName,
            email: email,
            password: password,
            cf_password: password,
            role: 'admin',
            root: false

        }
        onSubmit(data);
    }

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id="changePassword" tabIndex="-1" aria-labelledby="changePasswordLabel" aria-modal="true" role="dialog" style={show ? { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {}}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">


                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="changePasswordLabel">{modalTitle}</h5>
                        <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close" onClick={() => onClose()}><i className="bi bi-x-lg"></i></button>
                    </div>


                    <div className="modal-body">
                        <form className="row">

                            <div className="col-12 mb-3">
                                <label className="form-label">Full name<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                {error.fullName ? errors(error.fullName) : null}
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {error.email ? errors(error.email) : null}
                            </div>


                            <div className="col-12 mb-3">
                                <label className="form-label">Password<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {error.password ? errors(error.password) : null}
                            </div>


                            <div className="col-12">
                                <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" placeholder="Enter confirm password" value={cfpassword} onChange={(e) => setCfpassword(e.target.value)}  />
                                {error.cfpassword ? errors(error.cfpassword) : null}
                            </div>
                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal" onClick={() => onClose()}>Close</button>
                        <button type="button" className="btn btn-success my-0" onClick = {() => handleSubmit()}>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;