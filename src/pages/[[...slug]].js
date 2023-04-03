import styles from '../styles/main.module.scss'

import Head from 'next/head'

import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3'
import FileList from '@/components/FileList/FileList'
import Header from '@/components/Header/Header'
import Login from '@/components/Login/Login'
const client = new S3Client({
    region: 'eu-west-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
})

export async function getServerSideProps(context) {
    let slug = context?.query?.slug ? `${ context?.query?.slug.join('/') }/` : ''
    let command = new ListObjectsCommand({
        Bucket: process.env.S3_BUCKET,
        Prefix: `${ slug }`,
        Delimiter: '/',
    })

    let response = await client.send(command)

    let files = response.Contents?.map(item => {
        return {
            name: item.Key,
            size: item.Size,
        }
    }) || []

    let folders = response.CommonPrefixes?.map(item => item.Prefix) || []

    return {
        props: {
            path: context?.query?.slug || [],
            files,
            folders,
        }
    }
}

export default function Page({ path, files, folders }) {
    let upPath = path.slice(0, path.length - 1)

    let title = 'the tabletop library'
    if(path.length) {
        title = path.map(x => x.toLowerCase()).join(' / ') + ' - ' + title
    }

    return <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content="a tabletop rpg pdf collection" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <main className={ styles.main }>
            <Header path={ path } />
            <FileList files={ files } folders={ folders } />
        </main>
    </>
}
