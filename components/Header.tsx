import Image from "next/image"
import { useContext } from "react"
import AppContext from "../lib/context"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import Nav from "./Nav"
import styles from '../styles/Header.module.css'

const Header = () => {
    const value = useContext(AppContext)
    let { device } = value.state

    return (
        <header className={styles.header}>
            {/* {device !== 'desktop' && <div></div>} */}
            <figure className='header-logo'>
                <Image  
                    src={logo} 
                    layout="fill"
                    objectFit='contain'   
                    alt='audiophile logo' 
                />
            </figure>
            {device === 'desktop' && <Nav />}
            <figure className={styles.header_cart}>
                <Image 
                    src={cart} 
                    layout="fill" 
                    objectFit='fill'  
                    alt='shopping cart' 
                />
            </figure>
        </header>
    )
}

export default Header