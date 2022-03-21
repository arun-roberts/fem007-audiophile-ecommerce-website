import Image from 'next/image'
import { useContext } from "react"
import AppContext from "../lib/context"
import data from '../public/data.json'
import styles from '../styles/components/ShoppingCart.module.css'
import PlusMinus from '../components/PlusMinus'

type BuyingIt = {
    name: string;
    slug: string;
    shorthand: string;
    price: number;
    number: number;
}

const ShoppingCart = () => {
    const value = useContext(AppContext)
    let { setShoppingCart, removeAll } = value
    let { shoppingCart } = value.state
    let buyingIt = data.map(d => (
        {
            name: d.name,
            slug: d.slug,
            shorthand: d.shorthand,
            price: d.price,
            number: shoppingCart[d.name]
        }
    )).filter(d => d.number > 0)
    const removeOne = (key: string) => {
        let working = { ...shoppingCart }
        working[key]--
        setShoppingCart(working)
    }
    const addOne = (key: string) => {
        let working = { ...shoppingCart }
        working[key]++
        setShoppingCart(working)
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart_header}>
                <h3 className={styles.cart_header__heading}>CART({buyingIt.length})</h3>
                <button
                    className={styles.cart_header__remove}
                    type='button'
                    onClick={() => removeAll()}
                >Remove all</button>
            </div>
            <div className={styles.cart_display}>{buyingIt.map((e, i) => e && (
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
                            minusHandler={() => shoppingCart[e.name] > 0 && removeOne(e.name)}
                            current={shoppingCart[e.name]}
                            plusHandler={() => addOne(e.name)}
                        />
                    </div>
                    
                </article>
            ))}</div>
            <div className={styles.cart_total}>
                <h4 className={styles.cart_total__heading}>Total</h4>
                <p className={styles.cart_total__display}>${buyingIt.reduce((a: number, b: BuyingIt) => {
                    return a + (b.number * b.price)
                }, 0).toLocaleString()}</p>
            </div>
            <button className={styles.cart__checkout}>Checkout</button>
        </div>
    )
}

export default ShoppingCart