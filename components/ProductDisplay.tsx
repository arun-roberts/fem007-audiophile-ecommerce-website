import Image from "next/image"
import { useState, useContext } from "react"
import About from "./About"
import CategoryPicker from "./CategoryPicker"
import YouMayAlsoLike from "./YouMayAlsoLike"
import { Product } from "../lib/types"
import AppContext from "../lib/context"
import styles from '../styles/pages/ProductDisplay.module.css'

const ProductDisplay = ({product}: {product: Product}) => {
    const [ itemsToBuy, setItemsToBuy ] = useState<number>(1)
    const value = useContext(AppContext)
    let { device }: {device: string} = value.state
    const splitting = [
        product.name.slice(0, product.name.lastIndexOf(' ')), 
        product.name.slice(product.name.lastIndexOf(' '))
    ]
    const alt: string = `Image of ${product.name}`
    return (
        <main className="container">
            <button className={styles.back_button}>Go Back</button> 
            <section className={styles.product}>
                <div className={styles.product_head}>
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
                        <div className={styles.product_head_text__buy_it}>
                            <ul className={styles.buyIt}>
                                <li className={styles.buyIt__math}>-</li>
                                <li className={styles.buyIt__display}>{itemsToBuy}</li>
                                <li>+</li>
                            </ul>
                            <button className="button-one">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Features</h2>
                    <p>{product.features}</p>
                </div>
                <div>
                    <h2>In the box</h2>
                    <ul>
                        {product.includes.map((e, i) => (
                            <li key={i}><span>{e.quantity}x</span>{e.item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <figure>
                        <Image 
                            src={product.gallery.first[device].slice(1)} 
                            alt={alt} 
                            layout='fill' 
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={product.gallery.second[device].slice(1)} 
                            alt={alt} 
                            layout='fill' 
                        />
                    </figure>
                    <figure>
                        <Image 
                            src={product.gallery.third.mobile.slice(1)} 
                            alt={alt} 
                            layout='fill' 
                        />
                    </figure>
                </div>
            </section>
            <YouMayAlsoLike others={product.others} />
            <CategoryPicker />
            <About />
        </main>
    )
}

export default ProductDisplay