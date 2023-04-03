import styles from './File.module.scss'

import FileListItem from '../FileListItem/FileListItem'
import { useContext } from 'react'
import { AuthenticationContext } from '../AuthenticationContext'

export default function File({ file }) {
    let { isAuthenticated } = useContext(AuthenticationContext)

    let filename = file.name.split('/').slice(-1)

    let link = isAuthenticated ? `/api/download/${ file.name }` : null

    return <FileListItem className={ styles } link={ link }>{ filename }</FileListItem>
}