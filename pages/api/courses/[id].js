import connectDB from '../../../utils/connectDB';
import CourseCategory from '../../../models/courseCategoryModel';
import Courses from '../../../models/courseModel';
import auth, { withProtect, runCors } from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';
import {COURSE_STATUS} from '../../../utils/Constants';
import _ from 'lodash';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET':
            await getDetailCourse(req, res);
            break;
        case 'POST':
            await getCourseEnroll(req, res);
    }
}

const getCourseEnroll = async (req, res) => {
    try {
        const id = req.query.id || '';
        let  currentCourse = await Courses.findOne({ _id: id, isDeleted: false, status: {'$ne': COURSE_STATUS.PENDING} }, {isDeleted: 0, status: 0});
        if(currentCourse) {
            let curriculum = currentCourse.curriculum ? JSON.parse(currentCourse.curriculum) : [];
            curriculum = curriculum.map(item => {
                const newObject = {
                    id: item.id,
                    name: item.name
                };
                const topics = (item.topics || []).map(topic => {
                    return {
                        name: topic.name,
                        id: topic.id
                    }
                })
                newObject.topics = topics;
                return newObject;
            })
            currentCourse.curriculum = JSON.stringify(curriculum);
        }
        //console.log(currentCourse);
        const data = {
            course: currentCourse
        }
        returnResponse(res, 200, '', data);
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const getDetailCourse = async (req, res) => {
    try {
        const id = req.query.id || '';
        let  currentCourse = await Courses.findOne({ _id: id, isDeleted: false, status: {'$ne': COURSE_STATUS.PENDING} }, {isDeleted: 0, status: 0});
        if(currentCourse) {
            let curriculum = currentCourse.curriculum ? JSON.parse(currentCourse.curriculum) : [];
            curriculum = curriculum.map(item => {
                const newObject = {
                    id: item.id,
                    name: item.name
                };
                const topics = (item.topics || []).map(topic => {
                    return {
                        name: topic.name,
                        id: topic.id
                    }
                })
                newObject.topics = topics;
                return newObject;
            })
            currentCourse.curriculum = JSON.stringify(curriculum);
        }
        //console.log(currentCourse);
        const data = {
            course: currentCourse
        }
        returnResponse(res, 200, '', data);
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export default indexApi;

