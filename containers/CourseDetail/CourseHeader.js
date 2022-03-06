import React, { useContext } from 'react'
import Link from 'next/link'
import { slug } from '../../utils/commonFunctions';
import moment from 'moment';
const CourseHeader = ({course}) => {

    return (
        <section className="bg-light py-0 py-sm-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-8">

                        <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">{course.categoryName}</h6>

                        <h1>{course.title}</h1>
                        <p>{course.shortDescription}</p>

                        <ul className="list-inline mb-0">
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2"></i>{course.rate}/5.0</li>
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal text-success me-2"></i>All levels</li>
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="bi bi-patch-exclamation-fill text-danger me-2"></i>Last updated {moment(course.updatedAt).format('MM/YYYY')}</li>
                            <li className="list-inline-item h6 mb-0"><i className="fas fa-globe text-info me-2"></i>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CourseHeader;