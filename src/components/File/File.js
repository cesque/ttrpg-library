import styles from './File.module.scss'

import FileListItem from '../FileListItem/FileListItem'
import { useContext } from 'react'
import { AuthenticationContext } from '../AuthenticationContext'

import LinkIcon from './link.svg'

export default function File({ file }) {
    let { isAuthenticated } = useContext(AuthenticationContext)

    let filename = file.name.split('/').slice(-1)

    let name = encodeURIComponent(file.name)

    let link = isAuthenticated ? `/api/download/${ name }` : null

    function copyToClipboard() {
        window.navigator.clipboard.writeText(`${ window.location.origin }/api/download/${ name }`)
    }

    let icon = isAuthenticated ? <a className={ styles.linkIcon } onClick={ copyToClipboard }><LinkIcon /></a> : null

    return <FileListItem className={ styles } link={ link } icon={ icon }>
        { filename }
    </FileListItem>
}