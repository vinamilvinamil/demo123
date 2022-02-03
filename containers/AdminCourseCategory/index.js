import { useState, useEffect, useContext } from 'react'
import Modal from './CreateUserModal';
import Toast from '../../components/Toast';
import {DataContext} from '../../store/GlobalStore';
import {postData, handleFetchData, getData, deleteData} from '../../utils/fetchData'
import {useRouter} from 'next/router'
import { deleteImageUpload, imageUpload } from '../../utils/ImageUpload';
const CategoryItem = ({id, name, thumbnail, actived, numCourse, joindate , onDelete, onUpdate}) => (
    <tr>
        <td>
            <div className="d-flex align-items-center position-relative">

                <div className="w-60px">
                    <img src={thumbnail || "/Eduport - LMS, Education and Course Theme_files/01.jpg"} className="rounded" alt="" />
                </div>

                <h6 className="mb-0 ms-2">
                    <a href="#" className="stretched-link">{name}</a>
                </h6>
            </div>
        </td>
       
        <td>
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <h6 className="mb-0 fw-light">{numCourse}</h6>
                </div>
            </div>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <h6 className="mb-0 fw-light">{actived ? 'true' : 'false'}</h6>
                </div>
            </div>
        </td>

        <td>
            {joindate}
        </td>

        <td>
            <button className="btn btn-sm btn-success me-1 mb-1 mb-md-0" onClick={() => onUpdate(id)}>Edit</button>
            <button className="btn btn-sm btn-danger mb-0 me-1" onClick={() => onDelete(id)}>Delete</button>
        </td>
    </tr>
)

const AdminUser = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState(props.data);
    const [userUpdate, setUserUpdate] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
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
        const thumbnail = userData.thumbnailFile;
        let media
        if(thumbnail) {
            dispatch({type: 'NOTIFY', payload: {loading: true, blur: true}})
            media = await imageUpload(thumbnail);
            console.log('media', media);
            userData.thumbnail = media.url;
        }
        const data = await handleFetchData(dispatch, postData, ['auth/courseCategory', userData], true, true, true) 
        if(data) {
            setShowModal(false);
            onPageChange(1);
        }
    }

    const onDelete = async (id) => {
        console.log('delete', id);
        //public_id: "nextjs_media/uejweh2350bjg4xlessy"

        const data = await handleFetchData(dispatch, deleteData, ['auth/courseCategory', id], true, true, true);
        if(data) {
            onPageChange(1);
        }
    }

    const onPageChange = async (page) => {
        const params = {
            pageIndex: page,
            pageSize: 10
        }
        const token = localStorage.getItem('accessToken');
        const data = await handleFetchData(dispatch, getData, ['auth/courseCategory', params, token], false, true);
        setUserData(data);
        setCurrentIndex(page);
    }

    const onUpdate = (id) => {
        const userNeedUpdateArr = (userData.data || [] ).filter(item => item._id == id);
        if(userNeedUpdateArr?.length > 0) {
            setUserUpdate(userNeedUpdateArr[0]);
        } else {
            setUserUpdate(null);
        }
        setIsUpdate(true);
        setShowModal(true);
    }

    const onClose = () => {
        setUserUpdate(null);
        setIsUpdate(false);
        setShowModal(false);
    }
    console.log('data', userData.data);

    const users = (userData.data || []).map(item => {
        return {
            id: item._id,
            name: item.title,
            numCourse: 0,
            actived: item.actived,
            joindate: item.createdAt,
            thumbnail: item.thumbnail ? item.thumbnail.replace('image/upload', 'image/upload/c_thumb,w_200,g_face') : null

        }
    });


    return (
        <div className="page-content-wrapper border">
            <Modal modalTitle={isUpdate? 'Update User' : 'Create User'} dataUser = {userUpdate}  isUpdate={isUpdate} show={showModal} onClose ={onClose} onSubmit={submitNewUser}/>
            <div className="row mb-3">
                <div className="col-12 d-sm-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-2 mb-sm-0">Course Category Manager</h1>
                    <a className="btn btn-sm btn-primary mb-0" onClick={(e) => {setShowModal(true)}}>Create new Category</a>
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
                                    <th scope="col" className="border-0 rounded-start">Category Name</th>
                                    <th scope="col" className="border-0">Course Numbers</th>
                                    <th scope="col" className="border-0">isActived</th>
                                    <th scope="col" className="border-0">Created at</th>
                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    users.map((item, index) => {
                                        return <CategoryItem id={item.id} name = {item.name} actived={item.actived} thumbnail={item.thumbnail} joindate = {item.joindate} numCourse={item.numCourse} onDelete={onDelete} onUpdate = {onUpdate} key={index}/>
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

export default AdminUser;
