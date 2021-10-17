import connectDB from '../../../utils/connectDB';
import Orders from '../../../models/orderModel';
import auth from '../../../middleware/auth';
import Products from '../../../models/productModel';

connectDB();
const indexApi = async (req, res) => {
    switch (req.method) {
        case 'POST':
            await createOrder(req, res);
            break;
    }
}

const createOrder = async (req, res) => {
    try {
        const result = await auth(res, req);
        const {address, mobile, cart, total} = req.body;
        const newOrder = new Order({
            user: result.id,
            address,
            mobile,
            cart,
            total

        })
        cart.filter( item => {
            return sold( item._id, item.quantity, item.inStock, item.sold);
        })
        await newOrder.save();
        res.json(({
            msg: 'Payment success! We will contact you to confirmthe order'
        }))
    }catch( err) {
        return res.status(500).json({err: err.message})
    }
}

const sold = async (id, quantity, oldInStock, oldSld) => {
    await Products.findOneAndUpdate({_id: id}, {
        inStock: oldInStock - quantity,
        sold: quantity + oldSold
    })
}

export default indexApi;

