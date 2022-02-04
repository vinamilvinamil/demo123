import { useState, useEffect, useContext } from 'react'
import {DataContext} from '../../store/GlobalStore';
import {postData, handleFetchData, getData} from '../../utils/fetchData'
import {MONEY_UNIT} from '../../utils/Constants'
import {useRouter} from 'next/router'
import Link from 'next/link';

const CourseItem = ({data, resetPassword}) => (
    <tr>
        <td>
            <div className="d-flex align-items-center position-relative">

                <div className="w-60px">
                    <img src="/Eduport - LMS, Education and Course Theme_files/01.jpg" className="rounded" alt="" />
                </div>

                <h6 className="mb-0 ms-2">
                    <a href="#" className="stretched-link">{data.courseName}</a>
                </h6>
            </div>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <h6 className="mb-0 fw-light">{data.category}</h6>
                </div>
            </div>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <h6 className="mb-0 fw-light">{data.addedDate}</h6>
                </div>
            </div>
        </td>
        
        <td>
             <div className="d-flex align-items-center">
                <div className="ms-2">
                {
                    data.type == 0 ?
                    <h6 className="mb-0 fw-light badge bg-primary text-white">Beginner</h6> 
                    : data.type == 1 ?
                    <h6 className="mb-0 fw-light badge bg-purple text-white">Intermediate</h6> 
                    : data.type == 2 ?
                    <h6 className="mb-0 fw-light badge bg-dark text-white">Advanced</h6> 
                    : data.type == 3 ?
                    <h6 className="mb-0 fw-light badge bg-orange text-white">All level</h6> 
                    : null
                }
                    
                </div>
            </div>
        </td>

        <td>
             <div className="d-flex align-items-center">
                <div className="ms-2">
                    <h6 className="mb-0 fw-light">{data.price}</h6>
                </div>
            </div>
        </td>

        <td>
             <div className="d-flex align-items-center">
                <div className="ms-2">
                    {
                        data.status == 0 ?
                        <h6 className="mb-0 fw-light badge bg-warning bg-opacity-15 text-warning">Pending</h6>
                        : data.status == 1 ?
                        <h6 className="mb-0 fw-light badge bg-success bg-opacity-15 text-success">Live</h6>
                        : <h6 className="mb-0 fw-light badge bg-secondary bg-opacity-85">Rejected</h6>
                    }
                    
                </div>
            </div>
        </td>

        <td>
            {
                data.status != 0?
                <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                : 
                <>
                    <button className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">Approval</button>
                    <button className="btn btn-sm btn-secondary-soft mb-0" onClick={() => resetPassword(id)}>Reject</button>
                </>
            }
           
        </td>
    </tr>
)

const AdminCourses = (props) => {
    console.log(props);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState(props.data);
    const [state, dispatch] = useContext(DataContext);
    const [root, setRoot] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const router = useRouter();

    useEffect(() => {
        if(localStorage) {
            setRoot(localStorage.getItem('root'));
        }
    }, [])
    const submitNewUser = async (userData) => {
        console.log('submitnewUser', userData);
        const data = await handleFetchData(dispatch, postData, ['auth/register', userData], true, true, true) 
        if(data) {
            router.push('admin/user')
        }
    }

    const resetPassword = async (id) => {
        console.log('submitnewUser', id);
        const data = await handleFetchData(dispatch, postData, ['auth/resetPassword', {id: id}], true, true, true) 
        if(data) {
            //router.push('admin/user')
        }
    }

    const onPageChange = async (page) => {
        const params = {
            pageIndex: page,
            pageSize: 10
        }
        const token = localStorage.getItem('accessToken');
        const data = await handleFetchData(dispatch, getData, ['auth/user', params, token], false, true);
        setUserData(data);
        setCurrentIndex(page);
    }
    const courses = (props.data?.data || []).map(item => {
        return {
            id: item._id,
            courseName: item.title,
            category: item.category?.title || '',
            addedDate: item.createdAt || '3/3/1333',
            type: item.level,
            price: item.price + MONEY_UNIT.DOLA,
            status: item.status
        }
    });

    return (
        <div className="page-content-wrapper border">
            <div className="row mb-3">
                <div className="col-12 d-sm-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-2 mb-sm-0">Courses Manager</h1>
                    <Link href='/admin/courses/create'><a className="btn btn-sm btn-primary mb-0">Create new Course</a></Link>
                </div>
            </div>

            <div className='card bg-transparent border'>
                <div className="card-header bg-light border-bottom">

                    <div className="row g-3 align-items-center justify-content-between">

                        <div className="col-md-8">
                            <form className="rounded position-relative">
                                <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                            </form>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>

                <div className='card-body'>
                    <div className='table-responsive border-0 rounded-3'>

                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">

                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">Course Name</th>
                                    <th scope="col" className="border-0">Category</th>
                                    <th scope="col" className="border-0">Added Date</th>
                                    <th scope="col" className="border-0 d-flex align-items-center">Type</th>
                                    <th scope="col" className="border-0">Price</th>
                                    <th scope="col" className="border-0">Status</th>
                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    courses.map((item, index) => {
                                        return <CourseItem data = {item} key={index}/>
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination currentIndex ={currentIndex} totalSize={userData.total} pageSize={10} onPageChange={(page) => {onPageChange(page)}}/>
                    </div>
                </div>

            </div>


        </div>

    )
};

const Pagination = ({currentIndex = 1, totalSize, onPageChange, pageSize = 10}) => {
    if(totalSize < pageSize) return null;
    const initPage = 1;
    const lastPage = Math.ceil(totalSize / pageSize);
    const numPage = 5;

    //const [currentIndex, setCurrentIndex] = useState(initPage);
    

    let indexStart = currentIndex - 2;
    let indexEnd = currentIndex + 2;
    let breakStart = false, breakEnd = false;
    if(indexStart <= initPage) {
        indexStart = initPage;
        breakStart = false;
    } else {
        breakStart = true;
    }

    if(indexEnd >= lastPage) {
        indexEnd = lastPage;
        breakEnd = false;
    } else {
        breakEnd = true;
    }
    let paging = [];
    if(!breakStart && !breakEnd) {
        for(let i = indexStart; i <= indexEnd; i++) {
            paging.push(i);
        }
    } else if (breakStart && !breakEnd) {
        paging.push(initPage);
        paging.push(-1);
        for(let i = indexStart; i <= indexEnd; i++) {
            paging.push(i);
        }
    } else if ( !breakStart && breakEnd) {
        for(let i = indexStart; i <= indexEnd; i++) {
            paging.push(i);
        }
        paging.push(-1);
        paging.push(lastPage);
    } else {
        paging = [initPage, -1, currentIndex -1 , currentIndex, currentIndex + 1, -1 , lastPage];
    }

    if(lastPage <= numPage) {
        paging = [];
        for(let i = initPage; i <= lastPage; i++) {
            paging.push(i);
        }
    }
    
    const changePage = (page) => {
        if(page < initPage || page > lastPage) return;
        onPageChange(page);
       // setCurrentIndex(page)
    } 
    
    return (
        <div className="card-footer bg-transparent pt-10">
            <div className="d-sm-flex justify-content-sm-center align-items-sm-center">
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                    <ul className="pagination pagination-md pagination-primary-soft mb-0 pb-0">
                        <li className="page-item mb-0"><a className="page-link" onClick={() => changePage(currentIndex -1 )} tabIndex="-1"><i className="fas fa-angle-left"></i></a></li>
                        {
                            paging.map((item, index) => {
                                return item == -1 ?
                                (<li key = {index} className={`page-item mb-0`}><a className="page-link" style={{backgroundColor: 'unset'}}>...</a></li>)
                                : 
                                (
                                    <li className={`page-item mb-0 ${currentIndex == item ? 'active' : ''}`} key={index}><a className="page-link" onClick={() => changePage(item)}>{item}</a></li>
                                )
                            })
                        }
                        <li className="page-item mb-0"><a className="page-link" onClick={() => changePage(currentIndex  + 1 )}><i className="fas fa-angle-right"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 

export default AdminCourses;
