import connectDB from '../../../utils/connectDB';
import auth, { withGuest, withProtect, runCors } from '../../../middleware/auth'
import { valid, returnResponse } from '../../../utils/commonFunctions';
import Users from '../../../models/userModel';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';
import bcrypt from 'bcrypt'
import cookie from 'cookie'

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    const id = req.query.id || '';
    switch (req.method) {
        case 'GET':
            if (id == 'signout') {
                await withProtect(signout, req, res, 'user');
            }
            break;
        case 'POST':
            if (id == 'signup') {
                await signup(req, res);
            } else if (id == 'signin') {
                await signin(req, res);
            }
            break;
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email, role: 'user' });
        if (!user) return returnResponse(res, 400, 'This user does not exist');
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return returnResponse(res, 400, 'Incorrect password.')
        const access_token = createAccessToken({ id: user._id })
        const refresh_token = createRefreshToken({ id: user._id });
        returnResponse(res, 200, 'Login success', {
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

    } catch (err) {
        return returnResponse(res, 500, err.message)
    }
}

const signout = async (req, res) => {
    try {
        res.setHeader('Set-Cookie', cookie.serialize('refreshtoken'), '', { maxAge: 1 });
        res.setHeader('Set-Cookie', cookie.serialize('_atc'), '', { maxAge: 1 });
        returnResponse(res, 200, 'hh')
        //res.redirect('/')
    } catch (err) {
        return returnResponse(res, 500, err.message)
    }
}

const signup = async (req, res) => {
    try {
        const { name, email, password, cf_password } = req.body;
        const errMsg = valid(name, email, password, cf_password);
        if (errMsg) return res.status(400).json({ err: errMsg })

        const user = await Users.findOne({ email });
        if (user) return res.status(400).json({ err: 'This email already existed' })

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({ name, email, password: passwordHash });
        await newUser.save()
        res.json({ msg: 'Register success' });
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const sendEmail = () => {

};

export default indexApi;

