import Image from 'next/image'
import { useContext } from "react"
import AppContext from "../lib/context"
import data from '../public/data.json'
import styles from '../styles/components/ShoppingCart.module.css'
import PlusMinus from '../components/PlusMinus'
import { CartItem } from '../lib/types'
import Link from 'next/link'



const ShoppingCart = ({ setIsCartOpen }: { setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const value = useContext(AppContext)
    let { setShoppingCart, removeAll } = value
    let { shoppingCart } = value.state
    const removeOne = (key: number) => {
        let working = [ ...shoppingCart ]
          , id = working.findIndex(w => w.id === key )
        working[id].number--
        setShoppingCart(working)
    }
    const addOne = (key: number) => {
        let working = [ ...shoppingCart ]
          , id = working.findIndex(w => w.id === key )
        working[id].number++
        setShoppingCart(working)
    }

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
            <div className={styles.cart_display}>{shoppingCart.map((e: CartItem, i: number) => e && (
                <article className={styles.cart_display_item} key={i}>
                    <section className={styles.cart_display_item_info}>
                        <figure className={styles.cart_display_item_info__image}>
                            <Image 
                                src={`/assets/cart/image-${e.slug}.jpg`}
                                alt={e.name}
                                layout='fill'
                            />
                        </figure>
                        <div>
                            <h4 className={styles.cart_display_item_info__heading}>{e.shorthand}</h4>
                            <p className={styles.cart_display_item_info__price}>${e.price.toLocaleString()}</p>
                        </div>
                    </section>
                    <div className={styles.cart_display_item__plusMinus}>   
                        <PlusMinus  
                            minusHandler={() => shoppingCart[e.name] > 0 && removeOne(e.id)}
                            current={e.number}
                            plusHandler={() => addOne(e.id)}
                        />
                    </div>
                </article>
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