import Link from "next/link"
import styles from '../styles/components/Confirmation.module.css'
import { useEffect, useState, useContext } from 'react'
import CartItemDisplay from "./CartItemDisplay"
import { CartItem } from "../lib/types"
import AppContext from "../lib/context"
import ShoppingCart from "./ShoppingCart"

const Confirmation = ({products}: { products: CartItem[]}) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(true)
    const [ displayOthers, setDisplayOthers ] = useState<boolean>(false)
    const value = useContext(AppContext)
    const { isDesktop }: { isDesktop: boolean } = value.state
    const grandTotal: number = products.reduce((a: number, b: CartItem) => b.price * b.number + a, 0)
    useEffect(() => {
        const html: HTMLElement = document.getElementsByTagName('html')[0]
        const body: HTMLElement = document.body
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
                    <div className={styles.sold_info_display_items}>{
                        products.map((p, i) => (
                            <div key={i} className={`${styles.sold_info_display_items__item}`}>
                                <CartItemDisplay 
                                    product={p} 
                                    withMath={false} 
                                    size='small' 
                                    key={i} 
                                />
                            </div>
                        ))
                    }
                    </div>
                    <p 
                        onClick={() => isDesktop && setDisplayOthers(!displayOthers)}
                        className={styles.sold_info_display__others}
                    >{`and ${products.length - 1} other items(s)`}</p>
                </section>
                <section className={styles.sold_info_total}>
                    <h2 className={styles.sold_info_total__heading}>Grand total</h2>
                    <p className={styles.sold_info_total__number}>{grandTotal.toLocaleString()}</p>
                </section>
            </article>
            <Link href='/'>
                <a className={styles.sold__button} onClick={() => setIsOpen(false)}>Back to home</a>
            </Link>
        </div>
    )
}

export default Confirmation