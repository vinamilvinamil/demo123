import React, { useContext } from 'react'
import Link from 'next/link'
const CourseList = ({courseList = []}) => {
    courseList = [
        {
            id: 1,
            source : '/assets/images/01.jpeg',
            title: 'Digital Marketing',
            numCourses: 23,
            link : '#'
        },
        {
            id: 2,
            source : '/assets/images/03.jpeg',
            title: 'Figma',
            numCourses: 16,
            link : '#'
        },
        {
            id: 3,
            source : '/assets/images/05.jpeg',
            title: 'Python',
            numCourses: 32,
            link : '#'
        },
        {
            id: 4,
            source : '/assets/images/06.jpeg',
            title: 'Angular',
            numCourses: 48,
            link : '#'
        },
        {
            id: 5,
            source : '/assets/images/07.jpeg',
            title: 'React Native',
            numCourses: 31,
            link : '/course-category/react-native'
        },
        {
            id: 6,
            source : '/assets/images/08.jpeg',
            title: 'Sketch',
            numCourses: 38,
            link : '#'
        },
        {
            id: 7,
            source : '/assets/images/09.jpeg',
            title: 'Javascript',
            numCourses: 33,
            link : '#'
        },
        {
            id: 8,
            source : '/assets/images/10.jpeg',
            title: 'Boostrap',
            numCourses: 62,
            link : '#'
        }
    ];

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
                        <Link href={link}>
                            <a  className="text-white mt-auto h5 stretched-link">{title}</a>
                        </Link>
                        <div className="text-white">{numCourses} Courses</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseList;