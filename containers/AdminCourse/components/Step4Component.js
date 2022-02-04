import { useState, useEffect, useContext } from 'react'

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'
import TextEditorComponent from '../../../components/TextEditor';

const Step1Component = ({ optionsCategory, active = false, changepPageTab, onShowAddFAQModal, showConfirmModal}) => {

    const optionsLanguage = [
        { name: 'English', value: 'en' },
        { name: 'Tiếng Việt', value: 'vi' },
        { name: 'French', value: 'fr' },
        { name: 'German', value: 'gr' },
    ];
    const optionsLevel = [
        { value: COURSE_LEVEL.BEGINNER, name: COURSE_LEVEL_TITLE[COURSE_LEVEL.BEGINNER] },
        { value: COURSE_LEVEL.INTERMEDIATE, name: COURSE_LEVEL_TITLE[COURSE_LEVEL.INTERMEDIATE] },
        { value: COURSE_LEVEL.ADVANCED, name: COURSE_LEVEL_TITLE[COURSE_LEVEL.ADVANCED] },
        { value: COURSE_LEVEL.ALL_LEVEL, name: COURSE_LEVEL_TITLE[COURSE_LEVEL.ALL_LEVEL] },
    ]



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
            <h4>Additional information</h4>
            <hr />

            <div className="row g-4">

                <div className="col-12">
                    <div className="bg-light border rounded p-2 p-sm-4">
                        <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                            <h5 className="mb-2 mb-sm-0">Upload FAQs</h5>
                            <a className="btn btn-sm btn-primary-soft mb-0" onClick={() => onShowAddFAQModal()}><i className="bi bi-plus-circle me-2"></i>Add Question</a>
                        </div>

                        <div className="row g-4">
                            <div className="col-12">
                                <div className="bg-body p-3 p-sm-4 border rounded">
                                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                                        <h6 className="mb-0">How Digital Marketing Work?</h6>
                                        <div className="align-middle">
                                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                        </div>
                                    </div>
                                    <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.</p>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="bg-body p-4 border rounded">
                                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                                        <h6 className="mb-0">How Digital Marketing Work?</h6>
                                        <div className="align-middle">
                                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                        </div>
                                    </div>
                                    <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="bg-light border rounded p-4">
                        <h5 className="mb-0">Tags</h5>
                        <div className="mt-3">
                            {/* <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false"><div className="choices__inner">
                                <input type="text" className="form-control js-choice mb-0 choices__input" data-placeholder="true" data-placeholder-val="Enter tags" data-max-item-count="14" data-remove-item-button="true" hidden="" tabindex="-1" data-choice="active" value="" />
                                <div className="choices__list choices__list--multiple"></div>
                                <input type="text" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Enter tags" placeholder="Enter tags" style={{minWidth: '11ch', width: '1ch'}} />
                            </div>
                                <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                </div>
                            </div> */}
                            <span className="small">Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing</span>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="bg-light border rounded p-4">
                        <h5 className="mb-0">Message to a reviewer</h5>
                        <div className="mt-3">
                            <textarea className="form-control" rows="4" placeholder="Write a message" spellcheck="false"></textarea>
                            <div className="form-check mb-0 mt-2">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Any images, sounds, or other assets that are not my own work, have been appropriately licensed for use in the file preview or main course. Other than these items, this work is entirely my own and I have full rights to sell it here.
								</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-md-flex justify-content-between align-items-start mt-4">
                    <button className="btn btn-secondary prev-btn mb-0" onClick={(e) => {e.preventDefault(); changepPageTab(-1)}}>Previous</button>
                    <div className="text-md-end pt-sm-2">
                        <a  className="btn btn-success mb-2 mb-sm-0" onClick={() => showConfirmModal(true)}>Submit a Course</a>
                        <p className="mb-0 small mt-1">Once you click "Submit a Course", your course will be uploaded and marked as pending for review.</p>
                    </div>
                </div>
            </div>

        </div>

    )
};


export default Step1Component;
