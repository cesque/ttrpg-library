import styles from './Login.module.scss'

import Cookies from 'js-cookie'
import { useId, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()
    const fieldId = useId()

    function onChange(event) {
        Cookies.set('access', event.target.value, { expires: 31 })
    }

    function getLink() {
        if(router.query.redirect) {
            return <a className={ styles.return } href={ router.query.redirect }>Return</a>
        } else {
            return <a className={ styles.return } href="/">Return</a>
        }
    }

    return <div className={ styles.login }>
        <label className={ styles.label } htmlFor={ fieldId }>Enter password</label>
        <input className={ styles.input } type="text" id={ fieldId } onChange={ onChange } />
        { getLink() }
    </div>
}