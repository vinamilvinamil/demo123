
import AdminCourse from '../../../containers/AdminCourse';
import withAuthen from '../../../containers/withAuthen';
import {getData, parseToken} from '../../../utils/fetchData'
export async function getServerSideProps({req}) {
    const token = parseToken(req);
    const params = {
        pageIndex: 1,
        pageSize: 10
    }
    const res = await getData('auth/courses', params, token, false);
    return {
        props: {
            data: res.data || null,
            total: res.data.total || 0
        }
    }
}

export default withAuthen(AdminCourse);