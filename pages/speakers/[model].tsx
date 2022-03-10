// TYPES
import { GetStaticProps, GetStaticPaths } from "next"
import { Product } from '../../lib/types'
// COMPONENT IMPORTS
import About from "../../components/About"
import CategoryPicker from "../../components/CategoryPicker"
import ProductDisplay from "../../components/ProductDisplay"
import YouMayAlsoLike from "../../components/YouMayAlsoLike"
import data from '../../public/data.json'

const speakerData = data.filter(e => e.category === 'speakers')

const SpeakerModel = ({ speakers }: {speakers: Product}) => {
    return (
        <main>
            <ProductDisplay />
            <YouMayAlsoLike />
            <CategoryPicker />
            <About />
        </main>
    )
}

export default SpeakerModel

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const model = params !== undefined ? params.model : 'zx9-speaker'
    return {
        props: {
            speakers: speakerData.filter(s => s.slug === model)
        }
    }
} 

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = speakerData.map(s => ({
        params: { model: s.slug }
    }))
    return { paths, fallback: false}
}