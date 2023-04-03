import styles from './Header.module.scss'

import { useContext } from 'react'
import classNames from 'classnames'
import { AuthenticationContext } from '../AuthenticationContext'

export default function Header({ path }) {
    let { isAuthenticated } = useContext(AuthenticationContext)

    function getLoginLink() {
        if(isAuthenticated == false) {
            return <a className={ classNames(styles.part, styles.loginPart) } href="/login">log in</a>
        }

        return null
    }

    return <h2 className={ styles.header }>
        { getLoginLink() }
        <a className={ styles.part } href="/">ttrpgs</a>
        { path.map((part, index) => <a className={ styles.part } href={ `/${ path.slice(0, index + 1).join('/') }` } key={ index }>{ part }</a>) }
    </h2>
}