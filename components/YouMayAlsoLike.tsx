import { Others } from "../lib/types"
import Image from "next/image"
import Link from "next/link"

const YouMayAlsoLike = ({others}: {others: Others}) => {
    const device = 'mobile'
    
    return ( 
        <div>
            <h2>You may also like</h2>
            <ul>
                {
                    others.map((e, i) => {
                        let category: string = e.slug.slice(e.slug.lastIndexOf('-') + 1) 
                        if(!category.endsWith('s')) category += 's'
                        return (
                            <li key={i}>
                                <figure>
                                    <Image 
                                        src={e.image[device].slice(1)}
                                        alt={`Image of ${e.name}`}
                                        layout='fill'
                                    />
                                </figure>
                                <Link href={`/${category}/${e.slug}`}><a>See Product</a></Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default YouMayAlsoLike