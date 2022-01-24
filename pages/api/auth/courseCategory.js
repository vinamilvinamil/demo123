import connectDB from '../../../utils/connectDB';
import CourseCategory from '../../../models/courseCategoryModel';
import auth , {withProtect, runCors} from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await withProtect(getCourseCategory,req, res, 'root', 'root');
        break;
        case 'POST': 
        await withProtect(createCategory, req, res, 'root');
        break;
    }
}

const getCourseCategory = async (req, res) => {
    try {
        const pageIndex = (parseInt(req.query.pageIndex) || 1) - 1;
        const pageSize = parseInt(req.query.pageSize) || 100;
        const categorys = await CourseCategory.find()
                            .limit(pageSize)
                            .skip(pageSize * pageIndex);
        const total = await CourseCategory.count();
        const data = {
            data: categorys,
            total: total
        }
        returnResponse(res,200, '', data);
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

const createCategory = async (req, res) => {
    try {
        const {title, shortTerm, thumbnail, isActived} = req.body;
        // const errMsg = valid(name, email, password, cf_password);
        // if(errMsg) return res.status(400).json({err: errMsg})

        const newCategory = new CourseCategory({title: title, description: shortTerm, thumbnail: thumbnail, actived: isActived});
        await newCategory.save()
        res.json({msg: 'Create new category success'});
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

