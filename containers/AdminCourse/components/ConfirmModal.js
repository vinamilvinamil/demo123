import React, { useEffect, useState , useRef} from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const ConfirmModal = ({ show, modalTitle, onClose, onSubmit, dataUser, isUpdate }) => {

    const handleSubmit = () => {
        onSubmit();
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