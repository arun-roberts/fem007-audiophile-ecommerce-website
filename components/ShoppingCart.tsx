import { useContext } from "react"
import AppContext from "../lib/context"
import styles from '../styles/components/ShoppingCart.module.css'
import { CartItem } from '../lib/types'
import Link from 'next/link'
import CartItemDisplay from "./CartItemDisplay"



const ShoppingCart = ({ setIsCartOpen }: { setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const value = useContext(AppContext)
    let { removeAll } = value
    let { shoppingCart } = value.state

    return (
        <div className={styles.cart}>
            <div className={styles.cart_header}>
                <h3 className={styles.cart_header__heading}>CART({shoppingCart.length})</h3>
                <button
                    className={styles.cart_header__remove}
                    type='button'
                    onClick={() => removeAll()}
                >Remove all</button>
            </div>
            <div className={styles.cart_display}>{shoppingCart.sort((a: CartItem, b: CartItem) => b.price - a.price).map((e: CartItem, i: number) => e && (
                <CartItemDisplay product={e} key={i} withMath={true} />
            ))}</div>
            <div className={styles.cart_total}>
                <h4 className={styles.cart_total__heading}>Total</h4>
                <p className={styles.cart_total__display}>${shoppingCart.reduce((a: number, b: CartItem) => {
                    return a + (b.number * b.price)
                }, 0).toLocaleString()}</p>
            </div>
            <Link href='/checkout'>
                <button 
                    onClick={() => {
                        setIsCartOpen(false)
                    }}
                    className={styles.cart__checkout}
                >Checkout</button>
            </Link>
        </div>
    )
}

export default ShoppingCart