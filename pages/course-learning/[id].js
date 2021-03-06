import CourseLearning from '../../containers/CourseDetail/CourseLearning';
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
    const res = await getData(`course-enroll/${id}`, null, null, false);
    return {
        props: {
            data: res.data || null,
            total: res.data.total || 0
        }
    }
}



export default CourseLearning;