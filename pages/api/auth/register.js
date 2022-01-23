import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import bcrypt from 'bcrypt'

import {withProtect} from '../../../middleware/auth'

connectDB();

const indexApi = async (req, res) => {
    switch(req.method) {
        case 'POST' :
            await withProtect(register,req, res, 'root')
            break;
    }
}

const register = async (req, res) => {
    try {
        const {name, email, password, cf_password, role, root} = req.body;
        const errMsg = valid(name, email, password, cf_password);
        if(errMsg) return res.status(400).json({err: errMsg})

        const user = await Users.findOne({email});
        if(user) return res.status(400).json({err: 'This email already existed'})

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({name, email, password: passwordHash, role, root, cf_password});
        await newUser.save()
        res.json({msg: 'Register success'});
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;