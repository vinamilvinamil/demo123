import React, { useEffect, useState, useRef } from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const AddTopicModal = ({ show, modalTitle, onClose, onSubmit, dataUser, isUpdate }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState({});

    useEffect(() => {
        console.log(show, isUpdate, dataUser);
        if (isUpdate && dataUser) {
            setTitle(dataUser.title);
        } else {
            setTitle('');
        }
        setError({});
    }, [show]);

    const validateData = () => {
        const error = {};
        if (!title) error.title = '* Bat buoc'
        return error;
    }

    const handleSubmit = () => {
        const error = validateData();
        if (Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        setError({});
        const data = {
            id: dataUser?._id || null,
            title: title
        }
        console.log(data);
        //onSubmit(data);
    }

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id="changePassword" tabIndex="-1" aria-labelledby="changePasswordLabel" aria-modal="true" role="dialog" style={show ? { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {}}>
            <div className="modal-dialog modal-md">
                <div className="modal-content">

                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="changePasswordLabel">{modalTitle}</h5>
                        <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close" onClick={() => onClose()}><i className="bi bi-x-lg"></i></button>
                    </div>


                    <div className="modal-body">
                        <form className="row text-start g-3">

                            <div className="col-md-6">
                                <label className="form-label">Topic name</label>
                                <input className="form-control" type="text" placeholder="Enter topic name" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Video link</label>
                                <input className="form-control" type="text" placeholder="Enter Video link" />
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label">Course description</label>
                                <textarea className="form-control" rows="4" placeholder="" spellcheck="false"></textarea>
                            </div>

                            <div className="col-6 mt-3">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="options" id="option1" checked={true} />
                                    <label className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" for="option1">Free</label>
                                    <input type="radio" className="btn-check" name="options" id="option2" checked={false}/>
                                    <label className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" for="option2">Premium</label>
                                </div>
                            </div>

                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal" onClick={() => onClose()}>Close</button>
                        <button type="button" className="btn btn-success my-0" onClick={() => handleSubmit()}>{'Save Topic'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTopicModal;