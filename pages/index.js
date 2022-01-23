import {getData} from '../utils/fetchData'
import Home from '../containers/Home';
import MainDemo from '../components/MainDemo';
export async function getServerSideProps({req}) {
    let token = '';
    var match = req.headers.cookie.match(new RegExp('(^| )' + 'accessToken' + '=([^;]+)'));
    if (match) token = match[2];
    const res = await getData('product', null, null, false);
    return {
        props: {
            products: res.products,
            result: res.result
        }
    }
}

export default Home