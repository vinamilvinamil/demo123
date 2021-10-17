import jwt from 'jsonwebtoken'
import Users from '../models/userModel';

const withProtect = async (handler, req, res) => {
    
        try{
            const token = req.headers.authorization;
            if(!token) return res.status(400).json({err: 'Invalid Authentication'})
        
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if(!decoded) return res.status(400).json({err: 'Invalid Authenticatin'});
        
            const user = await Users.findOne({_id: decoded.id})
            req.user = user;
            return handler.apply(this, [req, res]);
        } catch (err) {
            return res.status(401).json({
                err: 'Please login to access'
            })
        }
    
}



export default withProtect;