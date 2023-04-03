import styles from './FileList.module.scss'

import File from '../File/File'
import Folder from '../Folder/Folder'

export default function FileList({ files, folders }) {
    return <ul className={ styles.list }>
        {
            folders.map((folder, index) => <Folder folder={ folder } key={ index } />)
        }

        {
            files.map((file, index) => <File file={ file } key={ index } />)
        }
    </ul>
}