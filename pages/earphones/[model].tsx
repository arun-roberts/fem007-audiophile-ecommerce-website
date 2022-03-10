// TYPES
import { GetStaticProps, GetStaticPaths } from 'next'
import { Product } from '../../lib/types'
// COMPONENT IMPORTS
import ProductDisplay from "../../components/ProductDisplay"
import CategoryPicker from "../../components/CategoryPicker"
import About from "../../components/About"
import YouMayAlsoLike from "../../components/YouMayAlsoLike"
import data from '../../public/data.json'

const earphoneData = data.filter(e => e.category === 'earphones')

const EarphoneModel = ({earphones}: {earphones: Product}) => {
    return (
        <main>
            <ProductDisplay />
            <YouMayAlsoLike />
            <CategoryPicker />
            <About />
        </main>
    )
}

export default EarphoneModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : 'yx1-earphones'
    return {
        props: {
            earphones: earphoneData.filter(e => e.slug === model)
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = earphoneData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}