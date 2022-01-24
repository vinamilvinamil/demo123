import React, { useEffect, useState , useRef} from 'react';

const errors = (value) => {
    return <label className="text-danger">{value}</label>
}

const Modal = ({ show, modalTitle, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [isActived, setActived] = useState(false);
    const [error, setError] = useState({});
    const imageRef = useRef();

    useEffect(() => {
        setTitle('');
        setShortDescription('');
        setThumbnail(null);
        setActived(false)
        setError({});
    }, [show]);

    const changeFileHandler = (event) => {
		setThumbnail(event.target.files[0]);
    };
    
    const removeFileSelected = () => {
        if(imageRef) imageRef.current.value = '';
        setThumbnail(null);
    }

    const validateData = () => {
        const error = {};
        if (!title) error.title = '* Bat buoc'
        if (!thumbnail) error.thumbnail = '* Bat buoc';
        if(thumbnail?.size > 1024* 1024) error.thumbnail = 'The largest image is 1MB';

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
            title: title,
            shortTerm: shortDescription,
            thumbnail: thumbnail,
            isActived: isActived
        }
        console.log(data);
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
                                <label className="form-label">Category title<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter fullname" value={title} onChange={(e) => setTitle(e.target.value)} />
                                {error.title ? errors(error.title) : null}
                            </div>

                            <div className="col-12 mb-3 mt-3">
                                <label className="form-label">Short description</label>
                                <textarea className="form-control" rows="4" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="Enter keywords"></textarea>
                            </div>

                            <div className="col-12 mt-3">
                                <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">

                                    <img src="assets/images/element/gallery.svg" className="h-50px" alt="" />
                                    <div>
                                        <h6 className="my-2">Upload course category image here, or<a href="#!" className="text-primary"> Browse</a></h6>
                                        <label style={{ cursor: 'pointer' }}>
                                            <span>
                                                <input ref={imageRef} className="form-control stretched-link" onChange={changeFileHandler} type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                            </span>
                                        </label>
                                        <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                                    </div>
                                    {error.thumbnail ? errors(error.thumbnail) : null}
                                </div>


                                <div className="d-sm-flex justify-content-end mt-2">
                                    <button type="button" className="btn btn-sm btn-danger-soft" onClick={removeFileSelected}>Remove image</button>
                                </div>
                            </div>



                            <div className="col-md-6 d-flex align-items-center justify-content-start">
                                <div className="form-check form-switch form-check-md">
                                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked={isActived} onChange={(e) => setActived(!isActived)}/>
                                    <label className="form-check-label" htmlFor="checkPrivacy1">This categoy should be shown in web</label>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal" onClick={() => onClose()}>Close</button>
                        <button type="button" className="btn btn-success my-0" onClick={() => handleSubmit()}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;