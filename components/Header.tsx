import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useContext, useEffect, useCallback } from "react"
import AppContext from "../lib/context"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import Nav from "./Nav"
import CategoryPicker from "./CategoryPicker"
import styles from '../styles/components/Header.module.css'
import ShoppingCart from "./ShoppingCart"
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'

const Header = () => {
    const [ addDesktopNav, setAddDesktopNav ] =  useState<boolean>(false)
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
            } else if ( isNavVisible ) {
                setIsNavVisible(false)
                setTimeout(() => setIsHeaderSolid(false), 200)
            }
        } else {
            setIsNavVisible(!isNavVisible)

        }
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

    useEffect(() => setAddDesktopNav(window.matchMedia(`(min-width: 930px)`).matches) ,[])

    return (
        <>
            <header className={
                pathname === '/' 
                ? `${styles.header} ${styles.header___home}` 
                : styles.header
            }>
                {pathname === '/' && <div className={
                    !isHeaderSolid
                    ? `${styles.header__convenient} ${styles.header__convenient___backInBlack}`
                    : styles.header__convenient
                }></div>}
                <div className={
                    pathname === '/' && !isHeaderSolid || pathname.match(/\/([a-z])+$/)
                    ? `${styles.header_container} ${styles.header_container__underline}`
                    : styles.header_container
                }>
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
                    </button>
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
                    <div className={styles.header__nav}>
                        <Nav />
                    </div>
                    <figure 
                        onClick={() => {
                            setIsCartOpen(!isCartOpen)
                        }} 
                        className={styles.header__cart}
                    >
                        <Image 
                            src={cart} 
                            layout="fill" 
                            objectFit='fill'  
                            alt='shopping cart' 
                        />
                    </figure>
                    {isCartOpen && 
                        <>
                            <dialog className={styles.cart} open={true}>
                                <ShoppingCart setIsCartOpen={setIsCartOpen} setIsNavVisible={setIsNavVisible} />
                            </dialog>
                        </>
                    }
                </div>
                <div className={ isNavVisible 
                    ? `${styles.header_collapsedNav} ${styles.header_collapsedNav___open}` 
                    : styles.header_collapsedNav 
                }>
                    <div className={styles.header_collapsedNav__navContainer}>
                        <CategoryPicker />
                    </div>
                </div>
            </header>
            {isCartOpen && 
                <>
                    {/* <dialog className={styles.cart} open={true}>
                        <ShoppingCart setIsCartOpen={setIsCartOpen} setIsNavVisible={setIsNavVisible} />
                    </dialog> */}
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