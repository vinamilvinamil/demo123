import connectDB from '../../../utils/connectDB';
import CourseCategory from '../../../models/courseCategoryModel';
import Courses from '../../../models/courseModel';
import auth, { withProtect, runCors } from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';
import {COURSE_STATUS} from '../../../utils/Constants';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET':
            await getCoursesFromCategory(req, res);
            break;
    }
}

const getCoursesFromCategory = async (req, res) => {
    try {
        const pageIndex = (parseInt(req.query.pageIndex) || 1) - 1;
        const pageSize = parseInt(req.query.pageSize) || 12;
        const id = req.query.id || '';
        const category = await CourseCategory.findOne({ _id: id }).select({ title: 1, description: 1, _id: 1 })
        //console.log(category.populated('course')); // trthy)
        let courses = [];
        let total = 0;
        if (category) {
            courses = await Courses.find({isDeleted: false, status: COURSE_STATUS.LIVE , category: category._id }, { video: 0, curriculum: 0, isDeleted: 0, description: 0, category: 0, createdAt:0,  updatedAt: 0, isActived: 0, status: 0, __v: 0})
                .limit(pageSize)
                .skip(pageSize * pageIndex);
            total = await Courses.find({isDeleted: false, status: COURSE_STATUS.LIVE , category: category._id }).count();
        }
        const data = {
            data: {
                category,
                courses: courses
            },
            total: total
        }
        returnResponse(res, 200, '', data);
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export default indexApi;

