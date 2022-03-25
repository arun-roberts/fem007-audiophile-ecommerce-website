import { Product } from "../lib/types"

import ProductPreview from "./ProductPreview"
import CategoryPicker from "./CategoryPicker"
import About from "./About"
import styles from '../styles/pages/CategoryDisplay.module.css'

const CategoryDisplay = ({products}: {products: Product[]}) => {
    return (
        <>
            <div className={styles.subheader}>{products[0].category}</div>
            <main className="container">
                {products.map((p, i) => (
                    <ProductPreview key={i} data={p} />
                ))}
                <div className={styles.category__picker}>
                    <CategoryPicker />
                </div>
                <About />
            </main>
        </>
    )
}

export default CategoryDisplay