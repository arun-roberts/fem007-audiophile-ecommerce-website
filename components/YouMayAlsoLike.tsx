import { Others } from "../lib/types"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/components/YouMayAlsoLike.module.css'


const YouMayAlsoLike = ({others}: {others: Others}) => {
    const device = 'mobile'
    
    return ( 
        <div className={styles.others}>
            <h2 className={styles.others__heading}>You may also like</h2>
            <ul className={styles.others_list}>
                {
                    others.map((e, i) => {
                        let category: string = e.slug.slice(e.slug.lastIndexOf('-') + 1) 
                        if(!category.endsWith('s')) category += 's'
                        return (
                            <li className={styles.others_list_item} key={i}>
                                <figure className={styles.others_list_item__image}>
                                    <Image 
                                        src={e.image[device].slice(1)}
                                        alt={`Image of ${e.name}`}
                                        layout='fill'
                                    />
                                </figure>
                                <h3 className={styles.others_list_item__heading}>{e.name}</h3>
                                <Link href={`/${category}/${e.slug}`}>
                                    <a className={`button-one ${styles.others_list_item__link}`}>See Product</a>
                                </Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default YouMayAlsoLike