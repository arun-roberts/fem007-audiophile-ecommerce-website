// TYPES
import { GetStaticProps, GetStaticPaths } from "next"
import { Product } from "../../lib/types"
// COMPONENT IMPORTS
import ProductDisplay from "../../components/ProductDisplay"

import data from '../../public/data.json'

const headphoneData: Product[] = data.filter(h => h.category === 'headphones')

const HeadphoneModel = ({headphones}: {headphones: Product}) => {
    return (
        <ProductDisplay product={headphones} />
    )
}

export default HeadphoneModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : headphoneData[0].slug
    return {
        props: {
            headphones: headphoneData.filter(s => s.slug === model)[0]
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = headphoneData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}