import Document , {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang= "en">
                <Head>
                    <meta name ='description' content = 'Dev AT Ecommerce website with Next.js'/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument