import Image from "next/image"
import { useRouter } from 'next/router'
import { useState, useContext } from "react"
import About from "./About"
import CategoryPicker from "./CategoryPicker"
import YouMayAlsoLike from "./YouMayAlsoLike"
import { Product, CartItem } from "../lib/types"
import AppContext from "../lib/context"
import styles from '../styles/pages/ProductDisplay.module.css'
import PlusMinus from "./PlusMinus"
import data from '../public/data.json'
import CartItemDisplay from "./CartItemDisplay"

const ProductDisplay = ({product}: {product: Product}) => {
    const [ itemsToBuy, setItemsToBuy ] = useState<number>(1)
    const [ putItIn, setPutItIn ] = useState(false)
    const [ fade, setFade ] = useState(false)

    const router = useRouter()
    const value = useContext(AppContext)
    let { setShoppingCart } = value
    let { device, shoppingCart }: {device: string, shoppingCart: CartItem[] | []} = value.state
    const splitting = [
        product.name.slice(0, product.name.lastIndexOf(' ')), 
        product.name.slice(product.name.lastIndexOf(' '))
    ]
    const alt: string = `Image of ${product.name}`

    const toShoppingCart: () => void = () => {
        let cart = [ ...shoppingCart ]
        if (cart.some(item => item.id === product.id)) {
            const id = cart.findIndex(e => e.id === product.id)
            cart[id].number += itemsToBuy
        } else {
            const item = {
                name: product.name,
                id: product.id,
                slug: product.slug,
                shorthand: product.shorthand,
                price: product.price,
                number: itemsToBuy
            }
            cart.push(item)
        }
        setPutItIn(true)
        setTimeout(() => {
            setFade(true)
            setTimeout(() => {
                setPutItIn(false)
                setFade(false)
            }, 1600)
        }, 600)
        setShoppingCart(cart)
        setItemsToBuy(1)
    }
    return (
        <div className={styles.convenient}>
            <button 
                className={styles.back_button}
                type='button'
                onClick={() => router.back()}
            >Go Back</button> 
            <main className="container">
                <article className={styles.product}>
                    <section className={styles.product_head}>
                        <figure className={`${styles.product_head__image} ${product.new ? styles.product_head__image___gapped : ''}`}>
                            <Image 
                                src={product.image[device].slice(1)} 
                                alt={alt} 
                                layout='fill' 
                            />
                        </figure>
                        <div className={styles.product_head_text}>
                            {product.new && <p className={styles.product_head_text__new}>New Product</p>}
                            <h1 className={styles.product_head_text__heading}>
                                {splitting[0]}
                                <span>{splitting[1]}</span>
                            </h1>
                            <p className={styles.product_head_text__body}>{product.description}</p>
                            <p className={styles.product_head_text__price}>${product.price.toLocaleString('en')}</p>
                            <div className={styles.product_head_text_buy}>
                                <div className={styles.product_head_text_buy__plusMinus}>
                                    <PlusMinus 
                                        minusHandler={() => itemsToBuy > 1 && setItemsToBuy(itemsToBuy - 1)}
                                        current={itemsToBuy}
                                        plusHandler={() => setItemsToBuy(itemsToBuy + 1)}
                                    />
                                </div>
                                <button 
                                    onClick={() => toShoppingCart()}
                                    className={styles.product_head_text_buy__button}
                                >Add to cart</button>
                            </div>
                        </div>
                    </section>
                    <section className={styles.product_info}>
                        <div className={styles.product_info_features}>
                            <h2 className={styles.product_info_features__heading}>Features</h2>
                            <p className={styles.product_info_features__body}>{product.features.replace(/\-/g, '\u2011')}</p>
                        </div>
                        <div className={styles.product_info_includes}>
                            <h2 className={styles.product_info_includes__heading}>In the box</h2>
                            <ul className={styles.product_info_includes_list}>
                                {product.includes.map((e, i) => (
                                    <li className={styles.product_info_includes_list__item} key={i}><span>{e.quantity}x</span>{e.item}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section className={styles.product_images}>
                        <figure className={`${styles.product_images__image} ${styles.product_images__image___one}`}>
                            <Image 
                                src={product.gallery.first[device].slice(1)} 
                                alt={alt} 
                                layout='fill' 
                            />
                        </figure>
                        <figure className={`${styles.product_images__image} ${styles.product_images__image___two}`}>
                            <Image 
                                src={product.gallery.second[device].slice(1)} 
                                alt={alt} 
                                layout='fill' 
                            />
                        </figure>
                        <figure className={`${styles.product_images__image} ${styles.product_images__image___three}`}>
                            <Image 
                                src={product.gallery.third.mobile.slice(1)} 
                                alt={alt} 
                                layout='fill' 
                            />
                        </figure>
                    </section>
                </article>
                <YouMayAlsoLike others={product.others} />
                <CategoryPicker />
                <About />
            </main>
            { putItIn &&
                <article className={fade ? `${styles.putItIn} ${styles.putItIn___goAway}` : `${styles.putItIn}`}>
                    <figure>
                        <Image 
                            src={product.image[device].slice(1)} 
                            alt={alt} 
                            layout='fill' 
                        />
                    </figure>
                    <p>{itemsToBuy} x {product.name} added to shopping cart.</p>
                </article>
            }
        </div>
    )
}

export default ProductDisplay