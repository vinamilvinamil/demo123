
import AdminCourse from '../../../containers/AdminCourse/CreateCourse';
import withAuthen from '../../../containers/withAuthen';
import {getData, parseToken} from '../../../utils/fetchData'
export async function getServerSideProps({req}) {
    const token = parseToken(req);
    const params = {
        pageIndex: 1,
        pageSize: 100
    }
    const res = await getData('auth/courseCategory', params, token, false);
    return {
        props: {
            data: res.data || null,
            total: res.total || 0
        }
    }
}

export default withAuthen(AdminCourse);