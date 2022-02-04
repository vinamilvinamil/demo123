import { useState, useEffect, useContext } from 'react'

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'
import TextEditorComponent from '../../../components/TextEditor';

const Step1Component = ({ optionsCategory, active = false , changepPageTab}) => {

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
        <div id="step-1" role="tabpanel" className={`content fade ${active? 'active dstepper-block ' : 'dstepper-none'}`} aria-labelledby="steppertrigger1">
            <h4>Course details</h4>
            <hr />

            <div className="row g-4">

                <div className="col-12">
                    <label className="form-label">Course title</label>
                    <input className="form-control" type="text" placeholder="Enter course title" value={data.courseTitle}
                        onChange={e => onTextChange(e, 'courseTitle')}/>
                </div>


                <div className="col-12">
                    <label className="form-label">Short description</label>
                    <textarea className="form-control" rows="2" placeholder="Enter keywords"
                    value={data.shortDes} onChange={e => onTextChange(e, 'shortDes')}></textarea>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Course category</label>
                    <SelectSearch search={true}
                        filterOptions={fuzzySearch}
                        className="select-search col-12" options={optionsCategory} name="category" placeholder="Choose category"
                        onChange={value => onSelectChange(value, 'category')} 
                        value={data.category}/>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Course level</label>
                    <SelectSearch search={false}
                        allowEmpty={true}
                        filterOptions={(filterData) => (query) => { if (!query) return filterData; return filterData.filter(ss => ss.name.toLowerCase().indexOf(query.toLowerCase()) > -1) }}
                        className="select-search col-12" value={data.level} onChange={value => onSelectChange(value, 'level')}  options={optionsLevel} name="level" placeholder="Choose course Level" />

                </div>


                <div className="col-md-6">
                    <label className="form-label">Language</label>
                    <SelectSearch search={true}
                        filterOptions={fuzzySearch}
                        className="select-search col-12" value={data.language} onChange={value => onSelectChange(value, 'language')} options={optionsLanguage} name="language" placeholder="Choose your language" />

                </div>


                <div className="col-md-6 d-flex align-items-center justify-content-start mt-5">
                    <div className="form-check form-switch form-check-md">
                        <input className="form-check-input" type="checkbox" checked={data.isFeature} onChange={(e) => onCheckboxChange('isFeature')}/>
                        <label className="form-check-label" htmlFor="checkPrivacy1">Check this for featured course</label>
                    </div>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Course time</label>
                    <input className="form-control" type="number" placeholder="Enter course time"
                     value={data.courseTime} onChange={e => onTextChange(e, 'courseTime')}/>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Total lecture</label>
                    <input className="form-control" type="number" placeholder="Enter total lecture" 
                    value={data.lecture} onChange={e => onTextChange(e, 'lecture')}/>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Course price</label>
                    <input type="number" className="form-control" placeholder="Enter course price" 
                    value={data.price} onChange={e => onTextChange(e, 'price')}/>
                </div>


                <div className="col-md-6">
                    <label className="form-label">Discount price</label>
                    <input className="form-control" type="text" placeholder="Enter discount"
                    value={data.discount} onChange={e => onTextChange(e, 'discount')} />
                    <div className="col-12 mt-1 mb-0">
                        <div className="form-check small mb-0">
                            <input className="form-check-input" type="checkbox" value={data.isDiscount} onChange={() => onCheckboxChange('isDiscount')} />
                            <label className="form-check-label" htmlFor="checkBox1">
                                Enable this Discount
							</label>
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <label className="form-label">Add description</label>
                    <TextEditorComponent value={description} onChange={(value) => onTextEditorChange(value, 'description')}/>
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-primary next-btn mb-0" onClick={(e) => {e.preventDefault(); changepPageTab(1)}}>Next</button>
                </div>
            </div>

        </div>

    )
};


export default Step1Component;
