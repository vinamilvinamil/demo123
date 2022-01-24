
import AdminCourseCategory from '../../containers/AdminCourseCategory';
import withAuthen from '../../containers/withAuthen';
import {getData, parseToken} from '../../utils/fetchData'
export async function getServerSideProps({req}) {
    const token = parseToken(req);
    const params = {
        pageIndex: 1,
        pageSize: 10
    }
    const res = await getData('auth/courseCategory', params, token, false);
    console.log(res)
    return {
        props: {
            data: res.data || null
        }
    }
}

export default withAuthen(AdminCourseCategory);