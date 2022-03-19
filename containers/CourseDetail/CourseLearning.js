import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const CourseLearning = (props) => {
    const curriculum = props.data?.course?.curriculum ? JSON.parse(props.data?.course?.curriculum) : [];
    const [lectureId, setLectureId] = useState(0);
    const [topicId, setTopicId] = useState(0);
    const [videoSelected, setVideoSelected] = useState(curriculum.length > 0 ? curriculum[lectureId].topics[topicId].link : null);
    let router =  useRouter();
    useEffect(() => {
        if(curriculum?.length == 0 || videoSelected == null) {
            router?.push('/404')
        }
    }, [])
    const   handleNextVideo= () => {
        let _topic = topicId, _lecture = lectureId;
        if(topicId + 1 < curriculum[lectureId].topics.length) {
            _topic += 1;
        } else if(lectureId + 1 < curriculum.length) {
            _lecture += 1;
        }
        if(_topic != topicId || _lecture != lectureId) {
            setLectureId(_lecture);
            setTopicId(_topic);
            setVideoSelected(curriculum[_lecture].topics[_topic].link)
        }
    }
    
    return (
        <div className="py-0  position-relative">

            <div className="row g-0">
                <div className="d-flex">
                    <div className="overflow-hidden fullscreen-video w-100">
                        <div className="rounded-3">

                            {
                                videoSelected?.indexOf('drive.google.com') != -1 ?
                                    <iframe className="ql-video" width="100%" height="87vh"
                                        style={{ width: '100%', height: '87vh' }}
                                        frameBorder="0" allowFullScreen={true}
                                        src={videoSelected}
                                        >

                                    </iframe>
                                    :
                                    <ReactPlayer
                                        url={videoSelected}
                                        className='react-player'
                                        playing
                                        width='100%'
                                        height='87vh'
                                        controls={true}
                                        allowFullScreen={true}
                                        onEnded={() => handleNextVideo()}
                                    />
                            }



                        </div>
                    </div>

                    <div className="justify-content-end position-relative">

                        <button className="navbar-toggler btn btn-white mt-4 plyr-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-controls="collapseWidthExample">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        <div className="collapse-horizontal collapse" id="collapseWidthExample">
                            <div className="card overflow-auto rounded-0 w-280px w-sm-400px" style={{height: '87vh'}}>

                                <div className="card-header bg-light rounded-0">
                                    <h1 className="mt-2 fs-5">The Complete Digital Marketing Course - 12 Courses in 1</h1>
                                    <h6 className="mb-0 fw-normal"><a href="#">By Jacqueline Miller</a></h6>
                                </div>


                                <div className="card-body">
                                    <h5>Course content</h5>
                                    <hr />

                                    <div className="row">
                                        <div className="col-12">

                                            <div className="accordion accordion-flush-light accordion-flush" id="accordionExample">


                                                {
                                                    curriculum.map((lecture) => {
                                                        return (
                                                            <div className="accordion-item" key={lecture.id}>

                                                                <h2 className="accordion-header" id={`heading-${lecture.id}`}>
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${lecture.id}`} aria-expanded="true" aria-controls={`collapse-${lecture.id}`}>
                                                                        <span className="mb-0 fw-bold">{lecture.name}</span>
                                                                    </button>
                                                                </h2>

                                                                <div id={`collapse-${lecture.id}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent={`#accordionExample${lecture.id}`}>
                                                                    <div className="accordion-body px-3">
                                                                        <div className="vstack gap-3">
                                                                            {
                                                                                lecture.topics?.map((topic, index) => {
                                                                                    return <React.Fragment key={topic.id}>

                                                                                        <div className={`d-flex justify-content-between align-items-center ${topicId == topic.id && lectureId == lecture.id ? 'bg-success bg-opacity-25' : ''}` } onClick={() => {setLectureId(lecture.id); setTopicId(topic.id); setVideoSelected(topic.link)}}>
                                                                                            <div className="position-relative d-flex align-items-center" style={{flex: 1}}>
                                                                                                <a className={`btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static ${topicId == topic.id && lectureId == lecture.id ? 'active' : ''}`} style={{minWidth: '32px'}}>
                                                                                                    <i className="fas fa-play me-0"></i>
                                                                                                </a>
                                                                                                <span className="d-inline-block ms-2 mb-0 h6 fw-light">{topic.name}</span>
                                                                                            </div>
                                                                                            <p className="mb-0">2m 10s</p>
                                                                                        </div>

                                                                                    </React.Fragment>
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <div className="d-grid">
                                        <a onClick={() => router.back()} className="btn btn-primary-soft mb-0">Back to course</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
};

export default CourseLearning