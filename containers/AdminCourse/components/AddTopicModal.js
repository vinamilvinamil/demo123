import React, { useEffect, useState, useRef } from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const AddTopicModal = ({ show, modalTitle, onClose, onSubmit, data}) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [isFree, setIsFree] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        if (data) {
            setTitle(data.name);
            setLink(data.link);
            setDescription(data.description);
            setIsFree(data.isFree);
        } else {
            setTitle('');
            setLink('');
            setDescription('');
            setIsFree(true);
        }
        setError({});
    }, [show]);

    const validateData = () => {
        const error = {};
        if (!title) error.title = '* Bat buoc'
        if(!link) error.link = '* Bat buoc';
        return error;
    }

    const handleSubmit = () => {
        const error = validateData();
        if (Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        setError({});
        const _data = {
            id: data ? data.id : -1,
            name: title,
            link: link,
            description: description,
            isFree: isFree
        }
        //console.log(data);
        onSubmit(_data);
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
                                <input className="form-control" type="text" placeholder="Enter topic name" value = {title} onChange={(e) => setTitle(e.target.value)} />
                                {error.title ? errors(error.title) : null}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Video link</label>
                                <input className="form-control" type="text" placeholder="Enter Video link" value = {link} onChange = {(e) => setLink(e.target.value)} />
                                {error.link ? errors(error.link) : null}
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label">Course description</label>
                                <textarea className="form-control" rows="4" placeholder="" spellcheck="false" value = {description} onChange={e => setDescription(e.target.value)}></textarea>
                            </div>

                            <div className="col-6 mt-3">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="options" id="option1" checked={isFree} onClick={() => setIsFree(true)} />
                                    <label className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" for="option1">Free</label>
                                    <input type="radio" className="btn-check" name="options" id="option2" checked={!isFree} onClick = {() => setIsFree(false) }/>
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