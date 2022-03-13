import Image from "next/image"
import { useContext } from "react"
import About from "./About"
import CategoryPicker from "./CategoryPicker"
import YouMayAlsoLike from "./YouMayAlsoLike"
import { Product } from "../lib/types"
import AppContext from "../lib/context"

const ProductDisplay = ({product}: {product: Product}) => {
    const value = useContext(AppContext)
    let { device }: {device: string} = value.state
    const alt: string = `Image of ${product.name}`
    return (
        <main className="container">
            <button>Go Back</button> 
            <section>
                <div>
                    <figure>
                        <Image 
                            src={product.image[device].slice(1)} 
                            alt={alt} 
                            layout='fill' 
                        />
                    </figure>
                    <div>
                        {product.new && <p>New Product</p>}
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <div>
                            <p>${product.price}</p>
                            <button>Add to cart</button>
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