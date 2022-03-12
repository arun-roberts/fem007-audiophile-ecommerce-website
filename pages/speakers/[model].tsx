// TYPES
import { GetStaticProps, GetStaticPaths } from "next"
import { Product } from '../../lib/types'
// COMPONENT IMPORTS
import ProductDisplay from "../../components/ProductDisplay"
import data from '../../public/data.json'

const speakerData = data.filter(e => e.category === 'speakers')

const SpeakerModel = ({ speakers }: {speakers: Product}) => {
    return (
        <ProductDisplay product={speakers} />
    )
}

export default SpeakerModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : speakerData[0].slug
    return {
        props: {
            speakers: speakerData.filter(s => s.slug === model)[0]
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = speakerData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}