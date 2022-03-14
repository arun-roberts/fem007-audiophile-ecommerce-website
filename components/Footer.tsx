import Image from 'next/image'
import logo from '../public/assets/shared/desktop/logo.svg'
import styles from '../styles/Footer.module.css'
import Nav from "./Nav"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <figure className='header-logo'>
                    <Image 
                        src={logo}
                        layout='fill'
                        objectFit='contain'
                        alt='audiophile logo' 
                    />
                </figure>
                <Nav />
            </div>
            <div>
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of music lovers 
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                    visit our demo facility - we&lsquo;re open 7 days a week.
                </p>
                <p>
                    Copyright 2021. All Rights Reserved
                </p>
            </div>
            <div>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer