import styles from '../styles/login.module.scss'

import Login from '@/components/Login/Login'
import Head from 'next/head'

export default function LoginPage() {
    return <>
        <Head>
            <title>log in - the tabletop library</title>
            <meta name="description" content="a tabletop rpg pdf collection" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <main className={ styles.main }>
            <Login />
        </main>
    </>
}