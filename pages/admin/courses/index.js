
import AdminUser from '../../../containers/AdminUser';
import withAuthen from '../../../containers/withAuthen';
import {getData, parseToken} from '../../../utils/fetchData'
export async function getServerSideProps({req}) {
    const token = parseToken(req);
    const params = {
        pageIndex: 1,
        pageSize: 10
    }
    const res = await getData('auth/user', params, token, false);
    return {
        props: {
            data: res.data || null
        }
    }
}

export default withAuthen(AdminUser);