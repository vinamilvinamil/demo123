import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalStore';
import Script from 'next/script'
import App from 'next/app'
import menu from '../common/menu';

function MyApp(props) {
    const { Component, pageProps, menus } = props;
    return (
        <DataProvider>
            
            <Script src="/static/bootstrap.bundle.min.js"></Script>
            <Script src="/static/functions.js"></Script>
            <Script src="/static/OverlayScrollbars.min.js"></Script>
            <Layout menus = {menus}>
                <Component {...pageProps} />
            </Layout>
        </DataProvider>

    )

}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps, menus: menu };
};

export default MyApp
