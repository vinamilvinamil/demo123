import { useState, useEffect, useContext } from 'react'
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'

const Step3Component = ({ optionsCategory, active = false , changepPageTab, onShowAddLectureModal, onShowAddTopicModal}) => {

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
            <h4>Curriculum</h4>
            <hr />

            <div className="row">

                <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                    <h5 className="mb-2 mb-sm-0">Upload Lecture</h5>
                    <a className="btn btn-sm btn-primary-soft mb-0" onClick={() => onShowAddLectureModal()}><i className="bi bi-plus-circle me-2"></i>Add Lecture</a>
                </div>

                <div className='accordion accordion-icon accordion-bg-light' id='accordionExample2'>
                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-1">
                            <button className="accordion-button fw-bold rounded d-inline-block d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                Introduction of Digital Marketing
												</button>
                        </h6>

                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                            <div className="accordion-body mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative">
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play"></i></a>
                                        <span className="ms-2 mb-0 h6 fw-light">Introduction</span>
                                    </div>
                                    <div>
                                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                    </div>
                                </div>
                                <hr />

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative">
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play"></i></a>
                                        <span className="ms-2 mb-0 h6 fw-light">What is Digital Marketing</span>
                                    </div>
                                    <div>
                                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                    </div>
                                </div>

                                <hr />

                                <a className="btn btn-sm btn-dark mb-0" onClick={() => onShowAddTopicModal(1)}><i className="bi bi-plus-circle me-2"></i>Add topic</a>
                            </div>

                        </div>
                    </div>

                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-2">
                            <button className="accordion-button fw-bold rounded d-inline-block d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                                Customer Life cycle
							</button>
                        </h6>

                        <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="heading-2" data-bs-parent="#accordionExample2" >
                            <div className="accordion-body mt-3">
                                <a className="btn btn-sm btn-dark mb-0" onClick={() => onShowAddTopicModal(2)}>
                                    <i className="bi bi-plus-circle me-2"></i>Add topic
								</a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-3">
                            <button className="accordion-button fw-bold rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                                How much should I offer the sellers?
							</button>
                        </h6>
                        <div id="collapse-3" className="accordion-collapse collapse show" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
                            <div className="accordion-body mt-3">
                                <a className="btn btn-sm btn-dark mb-0" onClick={() => onShowAddTopicModal(3)}>
                                    <i className="bi bi-plus-circle me-2"></i>Add topic
								</a>
                            </div>
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


export default Step3Component;
