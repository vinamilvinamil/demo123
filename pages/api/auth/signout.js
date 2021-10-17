import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import { returnResponse , showLog} from '../../../utils/commonFunctions';
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from '../../../utils/generateToken';
import {runCors, withProtect} from '../../../middleware/auth'
import cookie from 'cookie'
connectDB();

const indexApi = async (req, res) => {
    await runCors(req, res);
    switch(req.method) {
        case 'GET' :
            await withProtect(logout, req, res);
            break;
    }
}

const logout = async (req, res) => {
    try {
        res.setHeader('Set-Cookie', cookie.serialize('refreshtoken'), '', {maxAge: 1});
        res.setHeader('Set-Cookie', cookie.serialize('_atc'), '', {maxAge: 1});
        returnResponse(res, 200, 'hh') 
        //res.redirect('/')
    }catch(err) {
        return returnResponse(res, 500, err.message) 
    }
}

export default indexApi;