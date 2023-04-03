import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { authenticate } from '../authenticate'
import { useRouter } from 'next/router'

const client = new S3Client({
    region: 'eu-west-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
})

export const config = {
    api: {
        responseLimit: false,
    }
}

export default async function handler(req, res) {
    if(authenticate(req)) {
        let command = new GetObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: `${ req.query.slug.join('/') }`,
        })
        
        let response = await client.send(command)
        
        res.setHeader('Content-Type',response.ContentType)
        // res.setHeader('Content-Disposition', `attachment; filename=${ filename }`)

        response.Body.pipe(res)
    } else {
        let params = new URLSearchParams()
        params.set('redirect', req.url)

        res.redirect(302, `/login?${ params.toString() }`)
    }
}
