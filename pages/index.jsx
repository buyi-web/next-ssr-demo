import Head from 'next/head'
export default () => {
    console.log("index render");
    return (
        <div>
            <Head>
                <title>首页</title>
            </Head>
            <h1>首页</h1>
        </div>
    )
}
