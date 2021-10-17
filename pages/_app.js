import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalStore';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
    return (
        <DataProvider>
            <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" ></Script>
            <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </DataProvider>

    )

}

export default MyApp
