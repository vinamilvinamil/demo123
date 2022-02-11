import { useState, useEffect, useContext } from 'react'

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'
import TextEditorComponent from '../../../components/TextEditor';

const Step2Component = ({ optionsCategory, active = false, changepPageTab }) => {

    const [data, setData] = useState({
        courseTitle: '',
        shortDes: '',
        category: null,
        level: null,
        language: null,
        isFeature: false,
        courseTime: null,
        lecture: null,
        price: null,
        discount: null,
        isDiscount: false,
        description: ''
    });
    const [courseTitle, setCourseTitle] = useState('');
    const [shortDes, setShortDes] = useState('');
    const [category, setCategory] = useState(null);
    const [isFeature, setFeature] = useState(false);
    const [courseTime, setCourseTime] = useState(null);
    const [lecture, setLecture] = useState(null);
    const [price, setprice] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [isDiscount, setIsDiscount] = useState(false);
    const [description, setDescription] = useState('');

    const onTextChange = (e, name) => {
        const text = e.target.value;
        setData({
            ...data,
            [name]: text
        })
    };

    const onSelectChange = (value, name) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const onCheckboxChange = (name) => {
        const value = data[name];
        setData({
            ...data,
            [name]: !value
        });
    }

    const onTextEditorChange = (value, name) => {
        //console.log(value);
        setDescription(value);
    }
    return (
        <div id="step-1" role="tabpanel" className={`content fade ${active ? 'active dstepper-block ' : 'dstepper-none'}`} aria-labelledby="steppertrigger1">
            <h4>Course media</h4>
            <hr />

            <div className='row'>
                <div className="col-12">
                    <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                        <img src="assets/images/element/gallery.svg" className="h-50px" alt="" />
                        <div>
                            <h6 className="my-2">Upload course image here, or<a href="#!" className="text-primary"> Browse</a></h6>
                            <label style={{ cursor: 'pointer' }}>
                                <span>
                                    <input className="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                </span>
                            </label>
                            <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                        </div>
                    </div>


                    <div className="d-sm-flex justify-content-end mt-2">
                        <button type="button" className="btn btn-sm btn-danger-soft mb-3">Remove image</button>
                    </div>
                </div>

                <div className="col-12">
                    <h5>Upload video</h5>
                    <div className="col-12 mt-4 mb-5">
                        <label className="form-label">Video URL</label>
                        <input className="form-control" type="text" placeholder="Enter video url" />
                    </div>
                    
                    <h5 className="mt-4">Video preview</h5>
                    <div className="position-relative">
                        <img src="/assets/images/about/04.jpeg" className="rounded-4" alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <a href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox data-gallery="video-tour">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-secondary prev-btn mb-0" onClick={(e) => {e.preventDefault(); changepPageTab(-1)}}>Previous</button>
                    <button className="btn btn-primary next-btn mb-0" onClick={(e) => {e.preventDefault(); changepPageTab(1)}}>Next</button>
                </div>
            </div>

        </div>

    )
};


export default Step2Component;
