import Home from '../containers/Home';
import {getData, parseToken} from '../utils/fetchData'
export async function getServerSideProps({req}) {
    const res = await getData('courseCategory', null, null, false);
    return {
        props: {
            data: res.data || null
        }
    }
}


export default Home