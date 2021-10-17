import {getData, handleFetchData} from '../../utils/fetchData';
import {XORCipher, getCookie} from '../../utils/commonFunctions'
import DetailProduct from '../../containers/ProductDetail'

export async function getServerSideProps({req, params: {id}}) {
    const cookieData = getCookie(req.headers.cookie, '_atc');
    const token = cookieData ? XORCipher.decode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, cookieData) : '';
    const res = await getData(`product/${id}`, token)
    return {
        props: {
            product: res.data?.product || null,
            //result: res.result
        }
    }
}

export default DetailProduct;