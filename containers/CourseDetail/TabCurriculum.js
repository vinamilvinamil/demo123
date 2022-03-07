import React, { useContext } from 'react';

const TabCurriculum = ({ active, course }) => {
    const _data = course.curriculum ? JSON.parse(course.curriculum) : [];
    return (

        <div className={`tab-pane fade ${active ? 'active show' : ''}`} id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">

            <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">

            {
                        _data.map((lecture) => {
                            return (
                                <div className="accordion-item mb-3" key={lecture.id}>
                                    <h6 className="accordion-header font-base" id={`heading-${lecture.id}`}>
                                        <button className="accordion-button fw-bold rounded d-inline-block d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${lecture.id}`} aria-expanded="true" aria-controls={`collapse-${lecture.id}`}>
                                            {lecture.name}
                                        </button>
                                    </h6>

                                    <div id={`collapse-${lecture.id}`} className="accordion-collapse collapse show" aria-labelledby="heading-2" data-bs-parent={`#accordionExample${lecture.id}`} >
                                        <div className="accordion-body mt-3">
                                            {
                                                lecture.topics?.map((topic, index) => {
                                                    return <React.Fragment key = {topic.id}>
                                                        {
                                                            index != 0 ?
                                                            <hr/>
                                                            : null
                                                        }
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="position-relative d-flex align-items-center">
                                                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                                    <i className="fas fa-play me-0"></i>
                                                                </a>
                                                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">{topic.name}</span>
                                                            </div>
                                                            <p className="mb-0">2m 10s</p>
                                                        </div>
                                                      
                                                    </React.Fragment>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

        </div>
    )
}

export default TabCurriculum;


