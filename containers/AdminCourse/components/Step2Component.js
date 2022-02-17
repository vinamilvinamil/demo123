import { useState, useEffect, useContext, useRef } from 'react'

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'
import TextEditorComponent from '../../../components/TextEditor';

const Step2Component = ({ optionsCategory, active = false, changepPageTab, dataUser, isUpdate, onNext }) => {
    const [video, setVideo] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [error, setError] = useState({});
    const imageRef = useRef();

    // useEffect(() => {
    //     if (isUpdate && dataUser) {
    //         setVideo(dataUser.video);
    //         setThumbnail(dataUser.thumbnail);
    //     } else {
    //         setVideo('');
    //         setThumbnail(null);
    //     }

    //     if (imageRef?.current) imageRef.current.value = '';
    //     setThumbnailFile(null);
    //     setError({});
    // }, [active]);

    const changeFileHandler = (event) => {
        setThumbnailFile(event.target.files[0]);
    };

    const removeFileSelected = () => {
        if (imageRef?.current) imageRef.current.value = '';
        setThumbnail(null);
        setThumbnailFile(null);
    }

    const onsubmit = () => {
        const data = {
            // id: dataUser?._id || null,
            video: video,
            thumbnail: thumbnail,
            thumbnailFile: thumbnailFile,
        }
        onNext(data);
    }

    return (
        <div id="step-1" role="tabpanel" className={`content fade ${active ? 'active dstepper-block ' : 'dstepper-none'}`} aria-labelledby="steppertrigger1">
            <h4>Course media</h4>
            <hr />

            <div className='row'>
                <div className="col-12">
                    <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                        {
                            thumbnail ?
                                <img src={thumbnail} className="h-200px" alt="" />
                                : thumbnailFile ?
                                    <img src={URL.createObjectURL(thumbnailFile)} className="h-200px" alt="" />
                                    :
                                    <div>
                                        <h6 className="my-2">Upload course image here, or<a href="#!" className="text-primary"> Browse</a></h6>
                                        <label style={{ cursor: 'pointer' }}>
                                            <span>
                                                <input ref={imageRef} className="form-control stretched-link" onChange={changeFileHandler} type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                            </span>
                                        </label>
                                        <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                                    </div>
                        }
                    </div>


                    <div className="d-sm-flex justify-content-end mt-2">
                        <button type="button" className="btn btn-sm btn-danger-soft mb-3" onClick={removeFileSelected}>Remove image</button>
                    </div>
                </div>

                <div className="col-12">
                    <h5>Upload video</h5>
                    <div className="col-12 mt-4 mb-5">
                        <label className="form-label">Video URL</label>
                        <input className="form-control" type="text" placeholder="Enter video url" 
                        value={video} onChange={(e) => setVideo(e.target.value)}/>
                    </div>

                    <h5 className="mt-4">Video preview</h5>
                    <div className="position-relative d-flex justify-content-center align-items-center">
                        {
                            thumbnail ?
                                <img src={thumbnail} className="rounded-4" alt="" />
                                : thumbnailFile ?
                                    <img src={URL.createObjectURL(thumbnailFile)} className="rounded-4" alt="" />
                                    :
                                    <img src="/assets/images/about/04.jpeg" className="rounded-4" alt="" />
                        }
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <a href={video} className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox data-gallery="video-tour">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-secondary prev-btn mb-0" onClick={(e) => { e.preventDefault(); changepPageTab(-1) }}>Previous</button>
                    <button className="btn btn-primary next-btn mb-0" onClick={(e) => { e.preventDefault();onsubmit(); changepPageTab(1) }}>Next</button>
                </div>
            </div>

        </div>

    )
};


export default Step2Component;
