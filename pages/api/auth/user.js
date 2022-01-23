import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import {returnResponse} from '../../../utils/commonFunctions';

import {withProtect} from '../../../middleware/auth'

connectDB();

const indexApi = async (req, res) => {
    switch(req.method) {
        case 'GET' :
            await withProtect(getAllUser,req, res, 'admin')
            break;
    }
}

const getAllUser = async (req, res) => {
    try {
        const pageIndex = (parseInt(req.query.pageIndex) || 1) - 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const users = await Users.find().select({'_id': 1,  'name': 1 ,  'email': 1 , 'role': 1 , 'root': 1 , 'createdAt': 1})
                            .limit(pageSize)
                            .skip(pageSize * pageIndex);
        const total = await Users.count();
        const data = {
            users: users,
            total: total
        }
        returnResponse(res,200, '', data);
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;