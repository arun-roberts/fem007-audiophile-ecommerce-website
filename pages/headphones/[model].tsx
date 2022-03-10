// TYPES
import { GetStaticProps, GetStaticPaths } from "next"
import { Product } from "../../lib/types"
// COMPONENT IMPORTS
import About from "../../components/About"
import CategoryPicker from "../../components/CategoryPicker"
import ProductDisplay from "../../components/ProductDisplay"
import YouMayAlsoLike from "../../components/YouMayAlsoLike"
import data from '../../public/data.json'

const headphoneData = data.filter(e => e.category === 'headphones')

const HeadphoneModel = ({headphones}: {headphones: Product}) => {
    return (
        <main>
            <ProductDisplay />
            <YouMayAlsoLike />
            <CategoryPicker />
            <About />
        </main>
    )
}

export default HeadphoneModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : 'zx9-speaker'
    return {
        props: {
            headphones: headphoneData.filter(s => s.slug === model)
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = headphoneData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}