import PlusMinus from "./PlusMinus"
import Image from "next/image"
import { useContext } from "react"
import AppContext from "../lib/context"
import styles from '../styles/components/CartItemDisplay.module.css'
import { CartItem } from "../lib/types"

const CartItemDisplay = ({ product, withMath, size }: { product: CartItem, withMath: boolean, size: 'small' | 'large'}) => {
    const value = useContext(AppContext)
    let { setShoppingCart } = value
    let { shoppingCart } = value.state
    const removeOne = (key: number) => {
        let working = [ ...shoppingCart ]
          , id = working.findIndex(w => w.id === key )
        if ( working[id].number > 0 ) working[id].number--
        setShoppingCart(working)
    }
    const addOne = (key: number) => {
        let working = [ ...shoppingCart ]
          , id = working.findIndex(w => w.id === key )
        working[id].number++
        setShoppingCart(working)
    }
    // interface ImgSize {
    //     [key: string]: string
    // }
    // const imgSize: ImgSize =  {
    //     small: styles.item_info__image___small, 
    //     large: styles.item_info__image___large
    // }


    return (
        <article className={styles.item}>
            <section className={styles.item_info}>
                <figure className={size === 'small' ? `${styles.item_info__image} ${styles.item_info__image___small}` : `${styles.item_info__image} ${styles.item_info__image___large}`}>
                    <Image 
                        src={`/assets/cart/image-${product.slug}.jpg`}
                        alt={product.name}
                        layout='fill'
                    />
                </figure>
                <div>
                    <h4 className={styles.item_info__heading}>{product.shorthand}</h4>
                    <p className={styles.item_info__price}>${product.price.toLocaleString()}</p>
                </div>
            </section>
            {withMath 
            ? <div className={styles.item__plusMinus}>   
                <PlusMinus  
                    minusHandler={() => removeOne(product.id)}
                    current={product.number}
                    plusHandler={() => addOne(product.id)}
                />
            </div>
            : <p className={styles.item__multiples}>   
                x{product.number}
            </p>}
        </article>
    )
}

export default CartItemDisplay