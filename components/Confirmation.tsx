import Image from "next/image"
import Link from "next/link"
import styles from '../styles/components/Confirmation.module.css'
import { useEffect, useState } from 'react'
import CartItemDisplay from "./CartItemDisplay"
import { CartItem } from "../lib/types"

const Confirmation = ({products}: { products: CartItem[]}) => {
    const [ isOpen, setIsOpen ] = useState(true)
    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        const body = document.body
        body.scrollTop = 0
        html.style.overflow = 'hidden'
        body.style.overflow = 'hidden'
        if ( !isOpen ) {
            html.style.overflow = 'visible'
            body.style.overflow = 'visible'
        } 

    })

    return (
        <div className={styles.sold}>
            <div aria-hidden={true} className={styles.sold__tick}></div>
            <section className={styles.sold_text}>
                <h1 className={styles.sold_text__heading}>Thank you<br/>for your order</h1>
                <p className={styles.sold_text__p}>You will receive an email confirmation shortly.</p>
            </section>
            <article className={styles.sold_info}>
                <section className={styles.sold_info_display}>
                    <div className={styles.sold_info_display_items}>
                        <CartItemDisplay    
                            product={products.sort((a: CartItem, b: CartItem) => b.price - a.price)[0]} 
                            withMath={false} 
                            size='small'
                        />
                    </div>
                </section>
                <section className={styles.sold_info_total}>
                    <h2 className={styles.sold_info_total__heading}>Grand total</h2>
                    <p className={styles.sold_info_total__number}></p>
                </section>
            </article>
            <Link href='/'>
                <a className={styles.sold__button} onClick={() => setIsOpen(false)}>Back to home</a>
            </Link>
        </div>
    )
}

export default Confirmation