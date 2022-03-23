import Home from '../containers/Home';
import { getData, parseToken } from '../utils/fetchData'
import Head from 'next/head';
import {useRouter} from 'next/router';

export async function getServerSideProps({ req }) {
    const res = await getData('courseCategory', null, null, false);
    return {
        props: {
            data: res.data || null
        }
    }
}

const HomeContain = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <Head>
                <title>My Sample Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Complete description of the content showed in this sample page." />
                <meta property="og:title" content="My Sample Page" />
                <meta property="og:description" content="Complete description of the content showed in this sample page for Open Graph." />
                <meta property="og:url" content="https://mydomain.com/" />
                <meta property="og:type" content="website" />
                {/* Other meta tags... */}
            </Head>
            {/* Page content... */}
            <Home {...props}/>
        </div>
    )
}


export default HomeContain