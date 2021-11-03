import connectDB from '../../../utils/connectDB';
import Products from '../../../models/productModel';
import auth , {withGuest, withProtect,  runCors} from '../../../middleware/auth'
import {promisify} from 'util';
import stream from 'stream'
import fetch from 'node-fetch';

connectDB();
const indexApi = async (req, res) => {
    await runCors(req, res);
    switch (req.method) {
        case 'GET' : 
        await withGuest(getProduct,req, res);
        break;
    }
}

const pipeline = promisify(stream.pipeline);

const getProduct = async (req, res) => {
    try {
        const {id} = req.query;
        const product = await Products.findById(id);
        if(!product) return res.status(400).json({err: 'This product does not exist.'})

        const response = await fetch('http://files.giaoduccongdong.com/ThuVienSachNoi/VanHoaGiaoDuc/TieuThuyet_VanHoc/TTVH_VietNam/KeCuopBenBoi/03.KeCuoiBenBoi-P03.mp3')
        response.headers.forEach(function(value, name) {
            res.setHeader(name, value);
        });
        await pipeline(response.body, res);


    //     fetch('http://files.giaoduccongdong.com/ThuVienSachNoi/VanHoaGiaoDuc/TieuThuyet_VanHoc/TTVH_VietNam/KeCuopBenBoi/03.KeCuoiBenBoi-P03.mp3')
    // .then(response => responseToReadable(response).pipe(res.createWriteStream('audio.mp3')));


        // res.json({
        //     msg: 'success',
        //     data: {
        //         product
        //     }
            
        // })
    }catch( err) {
        return res.status(500).json({err: err.message})
    }
}

export default indexApi;

