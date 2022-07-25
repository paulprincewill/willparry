import Head from 'next/head';
export default function Layout({children}) {
    return(
        <>
            <Head>
                <title> Welcome to WillParry</title>
            </Head>
            <header>
                Navigation
            </header>
            <main>
                {children}
            </main>
   
        </>
    )
}