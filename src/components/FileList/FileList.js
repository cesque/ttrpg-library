import styles from './FileList.module.scss'

import File from '../File/File'
import Folder from '../Folder/Folder'

export default function FileList({ files, folders }) {
    return <ul className={ styles.list }>
        {
            folders.map(folder => <Folder folder={ folder } />)
        }

        {
            files.map(file => <File file={ file } />)
        }
    </ul>
}