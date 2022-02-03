import CourseCategory from '../../containers/CourseCategory';
import {getData, parseToken} from '../../utils/fetchData'

export async function getServerSideProps({req}) {
    const id = req.url.substring(req.url.lastIndexOf('-') + 1);
    if(!id || id.length != 24) {
        return {
            props: {
                data: null,
                total: 0
            }
        }
    };

    const res = await getData(`courseCategory/${id}`, null, null, false);
    return {
        props: {
            data: res.data || null,
            total: res.total || 0
        }
    }
}



export default CourseCategory;