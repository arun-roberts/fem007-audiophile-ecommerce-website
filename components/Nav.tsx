import Link from "next/link"
import styles from '../styles/components/Nav.module.css'

const Nav = () => {
    return (
        <nav>
            <menu className={styles.nav_menu}>
                <li className={styles.nav_menu_item}>
                    <Link href='/'>
                        <a className={styles.nav_menu_item__a}>HOME</a>
                    </Link>
                </li>
                <li className={styles.nav_menu_item}>
                    <Link href='/headphones'>
                        <a className={styles.nav_menu_item__a}>HEADPHONES</a>
                    </Link>
                </li>
                <li className={styles.nav_menu_item}>
                    <Link href='/speakers'>
                        <a className={styles.nav_menu_item__a}>SPEAKERS</a>
                    </Link>
                </li>
                <li className={styles.nav_menu_item}>
                    <Link href='/earphones'>
                        <a className={styles.nav_menu_item__a}>EARPHONES</a>
                    </Link>
                </li>
            </menu>
        </nav>
    )
}

export default Nav