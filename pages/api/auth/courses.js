import connectDB from '../../../utils/connectDB';
import {TABLE_MODEL} from '../../../utils/Constants';
import Courses from '../../../models/courseModel';
import auth , {withProtect, runCors} from '../../../middleware/auth'
import { returnResponse } from '../../../utils/commonFunctions';
const REQUEST_ID = {
    POST_CREATE_NEW: 1,
    POST_UPDATE: 2,
    POST_UPDATE_STATUS: 3
};
connectDB();
const indexApi = async (req, res) => {
    console.log(req.url)
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await withProtect(getCourses,req, res, 'root', 'root');
        break;
        case 'POST': 
            switch(req.body.requestType) {
                case REQUEST_ID.POST_CREATE_NEW :
                    await withProtect(createCategory, req, res, 'root');
                    break;
                case REQUEST_ID.POST_UPDATE_STATUS:
                    await withProtect(updateStatus, req, res, 'root');
                    break;
            }
           
            break;
        case 'DELETE':
            await withProtect(deleteCategory,req, res, 'root');
            break;
    }
}

const getCourses = async (req, res) => {
    try {
        const pageIndex = (parseInt(req.query.pageIndex) || 1) - 1;
        const pageSize = parseInt(req.query.pageSize) || 100;
        const courses = await Courses.find({isDeleted: {'$ne': true}})
                            // .populate({
                            //     path: 'category',
                            //     // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
                            //     select: 'title'
                            // })
                            .limit(pageSize)
                            .skip(pageSize * pageIndex);
        const total = await Courses.find({isDeleted: {'$ne': true}}).count();
        const data = {
            data: courses,
            total: total
        }
        returnResponse(res,200, '', data);
    }catch(err) {
        console.log(err);
        return res.status(500).json({err: err.message})
    }
}

const createCategory = async (req, res) => {
    try {
        console.log('create courses', req.body);
        console.log('11111');
        //const {title, shortTerm, thumbnail, isActived, id} = req.body;
        const bodyData = req.body;
        console.log('xxxx');
        // const errMsg = valid(name, email, password, cf_password);
        // if(errMsg) return res.status(400).json({err: errMsg})
        let category;
        let message ;
        if(bodyData.id) {
            category = await Courses.findOne({_id: id});
        }
        
        if(category) {
            category.title = title;
            category.description = shortTerm;
            category.thumbnail = thumbnail;
            category.actived = isActived;
            message = 'Update category success'
        } else {
            category = new Courses({
                title: bodyData.courseTitle, 
                description: bodyData.description, 
                shortDescription: bodyData.shortDes,
                thumbnail: bodyData.thumbnail, 
                level: bodyData.level || 0,
                price: bodyData.price,
                time: bodyData.courseTime,
                lecture: bodyData.lecture,
                isActived: bodyData.isFeature,
                category: bodyData.category,
                isDiscount: bodyData.isDiscount,
            });
            message = 'Create new course success';
        }
        await category.save();
        res.json({msg: message});
    }catch(err) {
        console.log(err);
        return res.status(500).json({err: err.message})
    }
}

const updateStatus = async (req, res) => {
    try{
        console.log('query', req.query);
        const {id, status} = req.body;
        const category = await Courses.findOne({_id: id});
        if(!category) return res.status(400).json({err: 'This category is not existed'})
        category.status = status;
        await category.save();
        res.json({msg: 'Update course status success'})
    } catch(err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteCategory = async (req, res) => {
    try{
        console.log('query', req.query);
        const id = req.query.id;
        const category = await Courses.findOne({_id: id});
        if(!category) return res.status(400).json({err: 'This category is not existed'})
        category.isDeleted = true;
        await category.save();
        res.json({msg: 'Delete category success'})
    } catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

