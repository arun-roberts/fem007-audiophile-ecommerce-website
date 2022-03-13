import { Product } from "../lib/types"

import ProductPreview from "./ProductPreview"
import CategoryPicker from "./CategoryPicker"
import About from "./About"

const CategoryDisplay = ({products}: {products: Product[]}) => {
    return (
        <>
            <div>{products[0].category}</div>
            <main className="container">
                {products.map((p, i) => (
                    <ProductPreview key={i} data={p} />
                ))}
                <CategoryPicker />
                <About />
            </main>
        </>
    )
}

export default CategoryDisplay