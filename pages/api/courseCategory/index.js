import connectDB from '../../../utils/connectDB';
import CourseCategory from '../../../models/courseCategoryModel';
import auth , {withProtect, runCors} from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await getCourseCategory(req, res);
        break;
    }
}

const getCourseCategory = async (req, res) => {
    try {
        const pageIndex = 1;
        const pageSize = 8;
        const categorys = await CourseCategory.find({isDeleted: {'$ne': true}, actived: {'$ne': false}})
                            .limit(pageSize);

        const data = {
            data: categorys
        }
        returnResponse(res,200, '', data);
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

