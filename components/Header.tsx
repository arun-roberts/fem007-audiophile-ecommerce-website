import Image from "next/image"
import Link from "next/link"
import { useState, useContext } from "react"
import AppContext from "../lib/context"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import Nav from "./Nav"
import CategoryPicker from "./CategoryPicker"
import styles from '../styles/components/Header.module.css'

const Header = () => {
    const [ isNavVisible, setIsNavVisible ] = useState<boolean>(false)
    const value = useContext(AppContext)
    let { device } = value.state

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_container}>
                    {device !== 'desktop' && 
                        <button
                            onClick={() => setIsNavVisible(!isNavVisible)}
                            type='button' 
                            className={styles.header_hamburger}
                        >
                            <div className={styles.header_hamburger__ingredients}></div>
                            <div className={styles.header_hamburger__ingredients}></div>
                            <div className={styles.header_hamburger__ingredients}></div>
                        </button>
                    }
                    <figure className={`header-logo ${styles.header__logo}`}>
                        <Image  
                            src={logo} 
                            layout="fill"
                            objectFit='contain'   
                            alt='audiophile logo' 
                        />
                    </figure>
                    {device === 'desktop' && <Nav />}
                    <Link href='/checkout'>
                        <figure className={styles.header_cart}>
                            <Image 
                                src={cart} 
                                layout="fill" 
                                objectFit='fill'  
                                alt='shopping cart' 
                            />
                        </figure>
                    </Link>
                </div>
            </header>
            <div className={ isNavVisible 
                ? `${styles.header__collapsedNav} ${styles.header__collapsedNav___open}` 
                : styles.header__collapsedNav 
            }>
                <CategoryPicker />
            </div>
            <div onClick={() => setIsNavVisible(false)} className={ isNavVisible ? 'fixed-background' : ''} aria-hidden='true'></div>
        </>
    )
}

export default Header