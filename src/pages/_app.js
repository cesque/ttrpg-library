import '@/styles/globals.scss'

import { AuthenticationProvider } from '@/components/AuthenticationContext'

export default function App({ Component, pageProps }) {
    return <AuthenticationProvider>
        <Component {...pageProps} />
    </AuthenticationProvider>
}
