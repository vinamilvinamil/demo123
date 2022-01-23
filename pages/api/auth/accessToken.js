import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import jwt from 'jsonwebtoken'
import {createAccessToken, createRefreshToken} from '../../../utils/generateToken';
import {returnResponse} from '../../../utils/commonFunctions';
connectDB();
const accessToken = async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return returnResponse(res, 400, 'Please login now!')

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)

        if(!result) return returnResponse(res, 400, 'Your token is incorrect or has expired!')

        const user = await Users.findById(result.id);
        if(!user) return returnResponse(res, 400, 'User does not exist.') 

        const access_token = createAccessToken({id: user._id})
        returnResponse(res, 200, '', {
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })
    }catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export default accessToken;