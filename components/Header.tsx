import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useContext, useEffect, useCallback, useLayoutEffect } from "react"
import AppContext from "../lib/context"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import Nav from "./Nav"
import CategoryPicker from "./CategoryPicker"
import styles from '../styles/components/Header.module.css'
import ShoppingCart from "./ShoppingCart"
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'

const Header = () => {
    const [ isCartOpen, setIsCartOpen ] = useState<boolean>(false)
    const [ isHeaderSolid, setIsHeaderSolid ] = useState<boolean>(false)
    const value = useContext(AppContext)
    let { device, isNavVisible } = value.state
    let { setIsNavVisible } = value
    const { pathname } = useRouter()

    const handleNavChange = () => {
        if ( pathname === '/' ) { 
            if ( !isNavVisible ) {
                setIsHeaderSolid(true)
                setTimeout(() => setIsNavVisible(true), 50)
            }
            if ( isNavVisible ) {
                setIsNavVisible(false)
                setTimeout(() => setIsHeaderSolid(false), 200)
            }
        }
        setIsNavVisible(!isNavVisible)
    }

    const escFunction = useCallback(event => {
        if (event.key === "Escape") setIsCartOpen(false)
      }, [])
    
      useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, [])

    return (
        <>
            <header className={
                pathname === '/' 
                ? `${styles.header} ${styles.header___home}` 
                : styles.header
            }>
                <div className={
                    pathname === '/' && !isHeaderSolid
                    ? `${styles.header_container} ${styles.header_container___backInBlack}` 
                    : styles.header_container
                }>
                    {device !== 'desktop' && 
                        <button
                            onClick={handleNavChange}
                            type='button' 
                            className={styles.header_hamburger}
                        >   
                            <figure className={styles.header_hamburger__patty}>
                                <Image 
                                    src={hamburger} 
                                    layout="fill"
                                    objectFit='contain' 
                                    alt='Menu opening hamburger' 
                                />
                            </figure>
                            {/* <div className={styles.header_hamburger__ingredients}></div>
                            <div className={styles.header_hamburger__ingredients}></div>
                            <div className={styles.header_hamburger__ingredients}></div> */}
                        </button>
                    }
                    <Link href='/'>
                        <figure
                            onClick={() => setIsNavVisible(false)}
                            className={`header-logo ${styles.header__logo}`}
                        >
                            <Image  
                                src={logo} 
                                layout="fill"
                                objectFit='contain'   
                                alt='audiophile logo' 
                            />
                        </figure>
                    </Link>
                    {device === 'desktop' && <Nav />}
                    <figure 
                        onClick={() => {
                            setIsCartOpen(!isCartOpen)
                        }} 
                        className={styles.header_cart}
                    >
                        <Image 
                            src={cart} 
                            layout="fill" 
                            objectFit='fill'  
                            alt='shopping cart' 
                        />
                    </figure>
                </div>
                <div className={ isNavVisible 
                    ? `${styles.header__collapsedNav} ${styles.header__collapsedNav___open}` 
                    : styles.header__collapsedNav 
                }>
                    <CategoryPicker />
                </div>
            </header>
            {isCartOpen && 
                <>
                    <dialog className={styles.cart} open={true}>
                        <ShoppingCart setIsCartOpen={setIsCartOpen} setIsNavVisible={setIsNavVisible} />
                    </dialog>
                    <div
                        onClick={() => {
                            setIsCartOpen(false)
                        }} 
                        className={styles.cart__backdrop}
                        aria-hidden='true'
                    ></div>
                </>
            }
            {isNavVisible &&
            <div 
                onClick={() => {
                    setIsNavVisible(false)
                }} 
                className='fixed-background'
                aria-hidden='true'
            ></div>}
        </>
    )
}

export default Header