import { Product } from "../lib/types"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import AppContext from "../lib/context"
import styles from '../styles/components/ProductPreview.module.css'

const ProductPreview = ({data}: {data: Product}) => {
    const value = useContext(AppContext)
    let { device } = value.state
    const splitting = [
        data.name.slice(0, data.name.lastIndexOf(' ')), 
        data.name.slice(data.name.lastIndexOf(' '))
]
    return (
        <article className={styles.preview}>
            <figure className={styles.preview__image}>
                <Image 
                    src={data.categoryImage[device].slice(1)}
                    alt={`Image of ${data.name}`}
                    layout='fill'
                />
            </figure>
            <div className={styles.preview_text}>
                {data.new && <p className={styles.preview_text__new}>New Product</p>}
                <h2 className={styles.preview_text__heading}>
                    {splitting[0]}
                    <span className={styles.preview_text__heading___span}>{splitting[1]}</span>
                </h2>
                <p className={styles.preview_text__body}>{data.description}</p>
                <Link href={`/${data.category}/${data.slug}`}>
                    <a className='button-one'>See Product</a>
                </Link>
            </div>
        </article>
    )
}

export default ProductPreview