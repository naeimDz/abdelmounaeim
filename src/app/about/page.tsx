// pages/index.js
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>My Traditional Page</title>
                <link rel="stylesheet" href="/styles/style.css" />
            </Head>
            <div id="root">
                <h1>about - Us!</h1>
                <script src="/scripts/script.js"></script>
            </div>
        </>
    );
}