// TYPES
import { GetStaticProps, GetStaticPaths } from 'next'
import { Product } from '../../lib/types'
// COMPONENT IMPORTS
import ProductDisplay from "../../components/ProductDisplay"
import data from '../../public/data.json'

const earphoneData: Product[] = data.filter(e => e.category === 'earphones')

const EarphoneModel = ({earphones}: {earphones: Product}) => {
    return (
        <ProductDisplay product={earphones} />
    )
}

export default EarphoneModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : earphoneData[0].slug
    return {
        props: {
            earphones: earphoneData.filter(e => e.slug === model)[0]
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = earphoneData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}