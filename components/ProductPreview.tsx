import { Product } from "../lib/types"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import AppContext from "../lib/context"

const ProductPreview = ({data}: {data: Product}) => {
    const value = useContext(AppContext)
    let { device } = value.state
    return (
        <article>
            <figure>
                <Image 
                    src={data.categoryImage[device].slice(1)}
                    alt={`Image of ${data.name}`}
                    layout='fill'
                />
            </figure>
            <div>
                {data.new && <p>New Product</p>}
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <Link href={`/${data.category}/${data.slug}`}><a>See Product</a></Link>
            </div>
        </article>
    )
}

export default ProductPreview