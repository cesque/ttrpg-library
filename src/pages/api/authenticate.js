
export function authenticate(req) {
    let cookies = req.cookies
    return cookies.access == process.env.ACCESS_COOKIE
}

export default async function handler(req, res) {
    if(authenticate(req)) {
        res.status(200).json({ success: true })
    } else {
        res.status(403).json({ success: false })
    }
}