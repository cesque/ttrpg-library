import styles from './FileListItem.module.scss'

import classNames from 'classnames'

export default function FileListItem({ className, link, download, children }) {
    let conditionalClasses = {
        [styles.itemWithLink]: link != null
    }

    return <li className={ classNames(styles.item, className.item, conditionalClasses) }>
        <a className={ classNames(styles.link, className.link) } href={ link } download={ download }>
            { children }
        </a>
    </li>
}