import { Product } from "../../lib/types"
import CategoryDisplay from "../../components/CategoryDisplay"
import data from '../../public/data.json'

const headphoneData: Product[] = data
    .filter(e => e.category === 'headphones')
    .reverse()

const Headphones = () => {
    return (
        <CategoryDisplay products={headphoneData} />
    )
}

export default Headphones