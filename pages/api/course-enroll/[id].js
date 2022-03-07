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
    }
}

const getDetailCourse = async (req, res) => {
    try {
        const id = req.query.id || '';
        let  currentCourse = await Courses.findOne({ _id: id, isDeleted: false, status: {'$ne': COURSE_STATUS.PENDING} }, {isDeleted: 0, status: 0});
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

