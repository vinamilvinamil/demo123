import connectDB from '../../../utils/connectDB';
import CourseCategory from '../../../models/courseCategoryModel';
import auth , {withProtect, runCors} from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await getCoursesFromCategory(req, res);
        break;
    }
}

const getCoursesFromCategory = async (req, res) => {
    try {
        const pageIndex = (parseInt(req.query.pageIndex) || 1) - 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const id = req.query.id || '';
        const category = await CourseCategory.findOne({_id: id}).select({title: 1, description: 1, _id: 1})
        //console.log(category.populated('course')); // truthy)

        const data = {
            data: {
                category,
                course: []
            },
            total: 0
        }
        returnResponse(res,200, '', data);
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

