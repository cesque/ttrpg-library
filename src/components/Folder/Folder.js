import styles from './Folder.module.scss'

import FileListItem from '../FileListItem/FileListItem'
import ArrowIcon from './arrow.svg'

export default function Folder({ folder }) {
    let parts = folder.split('/')
    parts.pop()
    let text = parts[parts.length - 1]

    let link = `/${ folder }`
    return <FileListItem className={ styles } link={ link }>
        <div className={ styles.text }>{ text }</div>
        <ArrowIcon />
    </FileListItem>
}