import Image from 'next/image'
import logo from '../public/assets/shared/desktop/logo.svg'
import styles from '../styles/components/Footer.module.css'
import Nav from "./Nav"
import facebook from '../public/assets/shared/desktop/icon-facebook.svg'
import twitter from '../public/assets/shared/desktop/icon-twitter.svg'
import instagram from '../public/assets/shared/desktop/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer_nav_elements}>
                    <figure className={`${styles.footer_nav_elements__logo} header-logo`}>
                        <Image 
                            src={logo}
                            layout='fill'
                            objectFit='contain'
                            alt='audiophile logo' 
                        />
                    </figure>
                    <Nav />
                </div>
                <div className={styles.footer_blurb}>
                    <p className={styles.footer_blurb__p}>
                        Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we&lsquo;re open 7 days a week.
                    </p>
                    <p className={styles.footer_blurb__legal}>
                        Copyright 2021. All Rights Reserved
                    </p>
                </div>
                <ul className={styles.footer_socials}>
                    <li className={styles.footer_socials__item}>
                        <Image 
                            src={facebook}
                            layout='fill'
                            objectFit='contain'
                            alt='facebook logo' 
                        />
                    </li>
                    <li className={`${styles.footer_socials__item} ${styles.footer_socials__item___twitter}`}>
                        <Image 
                            src={twitter}
                            layout='fill'
                            objectFit='contain'
                            alt='twitter logo' 
                        />
                    </li>
                    <li className={styles.footer_socials__item}>
                        <Image 
                            src={instagram}
                            layout='fill'
                            objectFit='contain'
                            alt='Instagram logo' 
                        />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer