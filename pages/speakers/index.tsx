import { Product } from "../../lib/types"
import CategoryDisplay from "../../components/CategoryDisplay"
import data from '../../public/data.json'

const speakerData: Product[] = data.filter(s => s.category === 'speakers').reverse()

const Speakers = () => {
    return (
        <CategoryDisplay products={speakerData} />
    )
}

export default Speakers