import React, { useContext } from 'react'
import Link from 'next/link'
import { slug } from '../../utils/commonFunctions';
const CourseList = ({courseList = []}) => {
    courseList = courseList.map(item => {
        return {
            id: item._id,
            title: item.title,
            source: item.thumbnail,
            numCourses: 0,
            link: `/course-category/${slug(item.title)}-${item._id}`
        }
    });

    return (
        <section>
            <div className="container">

                <div className="row mb-4">
                    <div className="col-lg-8 text-center mx-auto">
                        <h2 className="fs-1">Top Courses for IT</h2>
                        <p className="mb-0">Information Technology Courses to expand your skills and boost your career &amp; salary</p>
                    </div>
                </div>

                <div className="row g-4">
                    
                    {
                        courseList.map((item, index) => {
                            return <CourseItem key={item.id} source = {item.source} title={item.title} numCourses = {item.numCourses} link = {item.link}/>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

const CourseItem = ({source, title, numCourses = 0, link = '#'}) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card card-metro overflow-hidden rounded-3">
                <img src={source} alt="" />
                <div className="card-img-overlay d-flex">
                    <div className="mt-auto card-text">
                        
                            <a href={link}  className="text-white mt-auto h5 stretched-link">{title}</a>
                        
                        <div className="text-white">{numCourses} Courses</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList;