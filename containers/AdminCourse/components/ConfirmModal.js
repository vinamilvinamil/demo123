import React, { useEffect, useState , useRef} from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const ConfirmModal = ({ show, modalTitle, onClose, onSubmit, dataUser, isUpdate }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState({});

    useEffect(() => {
        console.log(show, isUpdate, dataUser);
        if(isUpdate && dataUser) {
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
        <div className={`modal fade ${show ? 'show' : ''}`} id="changePassword" tabIndex="-1" aria-labelledby="changePasswordLabel" aria-modal="true" role="dialog" style={show ? { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' } : {}}>
            <div className="modal-dialog-centered modal-md">
                <div className="modal-content">

                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="changePasswordLabel">Confirm</h5>
                    </div>


                    <div className="modal-body">
                        <form className="row">

                            <div className="col-12 mb-1">
                                <h5>Are you sure do this action ?</h5>
                            </div>

                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal" onClick={() => onClose()}>Cancel</button>
                        <button type="button" className="btn btn-success my-0" onClick={() => handleSubmit()}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;