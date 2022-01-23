import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import bcrypt from 'bcrypt'

import {withProtect} from '../../../middleware/auth'

connectDB();

const indexApi = async (req, res) => {
    switch(req.method) {
        case 'POST' :
            await withProtect(resetPassword,req, res, 'root')
            break;
    }
}

const resetPassword = async (req, res) => {
    try {
        const password = '12345';
        const {id} = req.body;
        console.log(id);

        const user = await Users.findOne({_id: id});
        if(!user) return res.status(400).json({err: 'This email is not existed'})

        const passwordHash = await bcrypt.hash(password, 12);
        user.password = passwordHash;
        await user.save();
        res.json({msg: 'Reset password success'});
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;