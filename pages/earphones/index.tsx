import { Product } from "../../lib/types"
import CategoryDisplay from "../../components/CategoryDisplay"
import data from '../../public/data.json'

const earphoneData: Product[] = data.filter(e => e.category === 'earphones')

const Earphones = () => {
    return (
       <CategoryDisplay products={earphoneData} />
    )
}

export default Earphones