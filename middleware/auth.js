import jwt from 'jsonwebtoken'
import Users from '../models/userModel';
import NextCors from 'nextjs-cors';
import {getCookie} from '../utils/commonFunctions'

const auth = async (req, res) => {
    const token = req.headers.authorization;
    if(!token) return res.status(400).json({err: 'Invalid Authentication'})

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if(!decoded) return res.status(400).json({err: 'Invalid Authenticatin'});

    const user = await Users.findOne({_id: decoded.id})
    return {id: user._id};
}


export const runCors =  async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: [],
        origin: 'abc.xyz',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
     
}

export const withGuest = async (handler, req, res) => {
    try{
        console.log(req.headers);
        const token = getCookie(req.headers.cookie, '_atc');
        if(!token) return res.status(400).json({err: 'Invalid Authentication'})
    
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!decoded) return res.status(400).json({err: 'Invalid Authenticatin'});
        return handler.apply(this, [req, res]);
    } catch (err) {
        return res.status(401).json({
            err: 'Please login to access'
        })
    }
}

export const withProtect = async (handler, req, res, ...roles) => {
    
    try{
        const token = req.headers.authorization;
        if(!token) return res.status(400).json({err: 'Invalid Authentication'})
    
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!decoded) return res.status(400).json({err: 'Invalid Authenticatin'});
    
        const user = await Users.findOne({_id: decoded.id})

        if(roles.length > 0 && !roles.includes(user.role)) {
            return res.status(403).json({
                err: 'You not permission to access'
            })
        }
        req.user = user;
        return handler.apply(this, [req, res]);
    } catch (err) {
        return res.status(401).json({
            err: 'Please login to access'
        })
    }

}



export default auth;