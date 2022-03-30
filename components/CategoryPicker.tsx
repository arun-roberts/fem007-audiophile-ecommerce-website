import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import headphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerImage from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import styles from '../styles/components/CategoryPicker.module.css'
import AppContext from "../lib/context"

const CategoryPicker = () => {
    const value = useContext(AppContext)
    let { setIsNavVisible } = value
    return (
        <ul className={styles.container}>
            <li className={styles.category}>
                <div className={styles.category__headphone_container}>
                    <figure className={styles.category__image}>
                        <Image 
                            src={headphoneImage} 
                            layout="fill"
                            objectFit='fill' 
                            alt='XX99 Mark I Headphones' 
                            priority
                        />
                    </figure>
                </div>
                <h4 className={styles.category__heading}>Headphones</h4>
                <Link href='/headphones'>
                    <a onClick={() => setIsNavVisible(false)} className={styles.buttonThree}>
                        <p>Shop</p><span></span>
                    </a>
                </Link>
            </li>
            <li className={styles.category}>
                <div className={styles.category__speaker_container}>
                    <figure className={styles.category__image}>
                        <Image 
                            src={speakerImage} 
                            layout="fill"
                            objectFit='contain' 
                            alt='YX1 Earphones'
                            priority
                        />
                    </figure>
                </div>
                <h4 className={styles.category__heading}>Speakers</h4>
                <Link href='/speakers'>
                    <a onClick={() => setIsNavVisible(false)} className={styles.buttonThree}>
                        <p>Shop</p><span></span>
                    </a>
                </Link>
            </li>
            <li className={styles.category}>
                <div className={styles.category__earphone_container}>
                    <figure className={styles.category__image}>
                        <Image 
                            src={earphoneImage} 
                            layout="fill"
                            objectFit='contain' 
                            alt='ZX9 Speaker' 
                            priority
                        />
                    </figure>
                </div>
                <h4 className={styles.category__heading}>Earphones</h4>
                <Link href='/earphones'>
                    <a onClick={() => setIsNavVisible(false)} className={styles.buttonThree}>
                        <p>Shop</p><span></span>
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default CategoryPicker