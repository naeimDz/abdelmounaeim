// pages/index.js
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>My Traditional Page</title>
                <link rel="stylesheet" href="/styles/style.css" />
            </Head>
            <div id="root">
                <h1>Hello, Next.js!</h1>
                <script src="/scripts/script.js"></script>
            </div>
        </>
    );
}
