import { useState, useEffect, useContext } from 'react'

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { COURSE_LEVEL_TITLE, COURSE_LEVEL } from '../../../utils/Constants'
import TextEditorComponent from '../../../components/TextEditor';

const Step1Component = ({ optionsCategory, active = false , changepPageTab, _data, _description, onNext}) => {

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

    const [data, setData] = useState(_data);
    const [description, setDescription] = useState(_description);
    const [endText, setEndText] = useState('');

    console.log('page1', _data, data);

    useEffect(() => {
        if(!_data.id) return;
        console.log('use effect page1', _data.id)
        setData(_data);
        setDescription(_description);
    }, [_data.id])
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
        setEndText(convertText(value))
    }

    const convertText = (text) => {
        const regexVideo = /(\[\[\[\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\]\]\])/ig; //video
        const resultVideo = text.match(regexVideo);
        if(resultVideo) {
            resultVideo.forEach(holder => {
                let video = holder;
                video = video.replace('[[[', iframeStart).replace(']]]', iframgeEnd);
                text = text.replaceAll(holder, video)
            });
        }
        const regexImage = /(\{\{\{\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\}\}\})/ig; //image
        const resultImage = text.match(regexImage);
        if(resultImage) {
            resultImage.forEach(holder => {
                let image = holder;
                image = image.replace('{{{', imageStart).replace('}}}', imageEnd);
                text = text.replaceAll(holder, image)
            });
        }
        return text;
    }

    const onSubmit = () => {
        onNext(data, description);
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
                    <label className="form-label px-4">{`image: {{{url}}}`}</label>
                    <label className="form-label">{`video: [[[url]]]`}</label>
                    <TextEditorComponent value={description} onChange={(value) => onTextEditorChange(value, 'description')}/>
                </div>

                <div className='col-12 ql-snow'>
                    <div className='ql-editor'>
                        <div dangerouslySetInnerHTML={{__html: endText}}></div>
                    </div>
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-primary next-btn mb-0" onClick={(e) => {e.preventDefault(); changepPageTab(1); onSubmit()}}>Next</button>
                </div>
            </div>

        </div>

    )
};

const iframeStart = `<iframe class="ql-video" width="560" height="315" frameborder="0" allowfullscreen="true" src="`
const iframgeEnd = `"></iframe><p><br></p>`;
const imageStart = `<img src="`;
const imageEnd = `"/>`;



export default Step1Component;
