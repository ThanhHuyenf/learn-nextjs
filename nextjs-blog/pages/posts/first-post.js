import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    const log = () => console.log(`script loaded correctly, window.FB has been populated`)

    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                    <script src="https://connect.facebook.net/en_US/sdk.js"/>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => log()}
                />
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}
// arrow function when re-render component
s