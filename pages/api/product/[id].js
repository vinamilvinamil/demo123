import connectDB from '../../../utils/connectDB';
import Products from '../../../models/productModel';
import auth , {withProtect, runCors} from '../../../middleware/auth'

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await withProtect(getProduct, req, res);
        break;
    }
}

const getProduct = async (req, res) => {
    try {
        const {id} = req.query;
        const product = await Products.findById(id);
        if(!product) return res.status(400).json({err: 'This product does not exist.'})
        res.json({
            msg: 'success',
            data: {
                product
            }
            
        })
    }catch( err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

