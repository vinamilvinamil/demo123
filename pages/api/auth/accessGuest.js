import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import jwt from 'jsonwebtoken'
import {createAccessToken, createRefreshToken} from '../../../utils/generateToken';
import {returnResponse} from '../../../utils/commonFunctions';

const accessGuest = async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        let isValidRfToken = true;
        if(!rf_token || rf_token.length < 20) {
            isValidRfToken = false;
        } else {
            const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
            if(!result) isValidRfToken = false;
        }
        let refresh_token = rf_token, access_token = null;
        if(isValidRfToken) {
            access_token = createAccessToken({id: -1})
        } else {
            access_token = createAccessToken({id: -1})
            refresh_token = createRefreshToken({id: -1});
        }

        returnResponse(res, 200, '', {
            access_token,
            refresh_token,
            user: null
        })
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default accessGuest;