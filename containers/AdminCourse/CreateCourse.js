import { useState, useEffect, useContext } from 'react'
import {DataContext} from '../../store/GlobalStore';
import {postData, handleFetchData, getData} from '../../utils/fetchData'
import {MONEY_UNIT} from '../../utils/Constants'
import {useRouter} from 'next/router'
import Step1Component from './components/Step1Component';
import Step2Component from './components/Step2Component';
import Step3Component from './components/Step3Component';
import Step4Component from './components/Step4Component';

import AddLectureModal from './components/AddLectureModal';
import AddTopicModal from './components/AddTopicModal';
import AddFAQModal from './components/AddFAQModal';
import ConfirmModal from './components/ConfirmModal';


const AdminCreateCourses = (props) => {
    const [showAddLecture, setShowAddLecture] = useState(false);
    const [showAddTopic, setShowAddTopic] = useState(false);
    const [showAddFAQ, setShowAddFAQ] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [state, dispatch] = useContext(DataContext);
    const [pageActive, setPageActive] = useState(1);
    const router = useRouter();
    const categoryList = (props.data?.data || []).map(item => {
        return {
            value: item._id,
            name: item.title
        }
    });

    const submitNewUser = async (userData) => {
        console.log('submitnewUser', userData);
        const data = await handleFetchData(dispatch, postData, ['auth/register', userData], true, true, true) 
        if(data) {
            router.push('admin/user')
        }
    }

    const onClose = () => {
        setUserUpdate(null);
        setIsUpdate(false);
        setShowModal(false);
    }

    const changepPageTab = (offset) => {
        setPageActive(pageActive + offset);
    }

    const onShowAddLectureModal = () => {
        setShowAddLecture(true);
        setShowConfirmModal(true);
    }

    const onShowAddTopicModal = (sessionId) => {
        setShowAddTopic(true);
    }

    const onShowAddFAQModal = () => {
        setShowAddFAQ(true);
    }

    const onShowConfirmModal = () => {
        setShowConfirmModal(true);
    }
    return (
        <div className="container">
        <AddLectureModal modalTitle={'Add Lecture'} isUpdate={false} show={showAddLecture} onClose ={() => setShowAddLecture(false)} onSubmit={submitNewUser}/>
        <AddTopicModal modalTitle={'Add Topic'} isUpdate={false} show={showAddTopic} onClose ={() => setShowAddTopic(false)} onSubmit={submitNewUser}/>
		<AddFAQModal modalTitle={'Add FAQ'} isUpdate={false} show={showAddFAQ} onClose ={() => setShowAddFAQ(false)} onSubmit={submitNewUser}/>
        <ConfirmModal  show={showConfirmModal} onClose ={() => setShowConfirmModal(false)} onSubmit={() => {}}/>
        <div className="row">
          <div className="col-12">
				<h1 className="h2 m-2 mb-4">Create new course</h1>
			</div>

		</div>

		<div className="card bg-transparent border rounded-3 mb-5">
			<div className="bs-stepper stepper-outline">
				
				<div className="card-header bg-light border-bottom px-lg-5">
					
					<div className="bs-stepper-header" role="tablist">
						
						<div className={`step ${pageActive == 1 ? 'active' : ''} `} data-target="#step-1" onClick={() => setPageActive(1)}>
							<div className="d-grid text-center align-items-center">
								<button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1" aria-selected="true">
									<span className="bs-stepper-circle">1</span>
								</button>
								<h6 className="bs-stepper-label d-none d-md-block">Course details</h6>
							</div>
						</div>
						<div className="line"></div>

						
						<div className={`step ${pageActive == 2 ? 'active' : ''} `} data-target="#step-2" onClick={() => setPageActive(2)}>
							<div className="d-grid text-center align-items-center">
								<button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2" aria-selected="false">
									<span className="bs-stepper-circle">2</span>
								</button>
								<h6 className="bs-stepper-label d-none d-md-block">Course media</h6>
							</div>
						</div>
						<div className="line"></div>

						
						<div className={`step ${pageActive == 3 ? 'active' : ''} `} data-target="#step-3" onClick={() => setPageActive(3)}>
							<div className="d-grid text-center align-items-center">
								<button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3" aria-selected="false">
									<span className="bs-stepper-circle">3</span>
								</button>
								<h6 className="bs-stepper-label d-none d-md-block">Curriculum</h6>
							</div>
						</div>
						<div className="line"></div>

						
						<div className={`step ${pageActive == 4 ? 'active' : ''} `} data-target="#step-4" onClick={() => setPageActive(4)}>
							<div className="d-grid text-center align-items-center">
								<button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4" aria-selected="false">
									<span className="bs-stepper-circle">4</span>
								</button>
								<h6 className="bs-stepper-label d-none d-md-block">Additional information</h6>
							</div>
						</div>
					</div>
					
				</div>

				
				<div className="card-body">
					
					<div className="bs-stepper-content">
						<form onSubmit={() => {return false}}>
                            <Step1Component optionsCategory = {categoryList} active={pageActive == 1} changepPageTab={changepPageTab}/>
                            <Step2Component optionsCategory = {categoryList} active={pageActive == 2} changepPageTab = {changepPageTab}/>
                            <Step3Component optionsCategory = {categoryList} active={pageActive == 3} changepPageTab ={changepPageTab} onShowAddLectureModal= {onShowAddLectureModal} onShowAddTopicModal={onShowAddTopicModal}/>
                            <Step4Component optionsCategory = {categoryList} active={pageActive == 4} changepPageTab = {changepPageTab} onShowAddFAQModal={onShowAddFAQModal} showConfirmModal={setShowConfirmModal}/>
                        </form>
					</div>
				</div>
				
			</div>
		</div>
	</div>

    )
};


export default AdminCreateCourses;
