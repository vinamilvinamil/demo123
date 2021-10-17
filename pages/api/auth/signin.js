import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import { returnResponse , showLog} from '../../../utils/commonFunctions';
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from '../../../utils/generateToken';
import {runCors} from '../../../middleware/auth'
connectDB();

const indexApi = async (req, res) => {
    await runCors(req, res);
    switch(req.method) {
        case 'POST' :
            await login(req, res)
            break;
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await Users.findOne({email});
        if(!user) return returnResponse(res, 400, 'This user does not exist');
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return returnResponse(res, 400, 'Incorrect password.')
        showLog('api signin', user);
        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id});
        // res.json({
        //     msg: 'Register success',
        //     access_token,
        //     refresh_token,
        //     user: {
        //         name: user.name,
        //         email: user.email,
        //         role: user.role,
        //         avatar: user.avatar,
        //         root: user.root
        //     }
        // });
        returnResponse(res, 200, 'Register success', {
            access_token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })
        
    }catch(err) {
        return returnResponse(res, 500, err.message) 
    }
}

export default indexApi;