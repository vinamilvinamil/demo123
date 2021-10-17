import {getData} from '../utils/fetchData'
import Home from '../containers/Home';

export async function getServerSideProps() {
    const res = await getData('product');
    return {
        props: {
            products: res.products,
            result: res.result
        }
    }
}

export default Home