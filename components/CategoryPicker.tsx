import Image from "next/image"
import Link from "next/link"
import headphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerImage from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import styles from '../styles/CategoryPicker.module.css'

const CategoryPicker = () => {
    return (
        <ul className={styles.container}>
            <li className={styles.categoryContainer}>
                <figure className={styles.headphoneImage}>
                    <Image 
                        src={headphoneImage} 
                        layout="fill"
                        objectFit='fill' 
                        alt='XX99 Mark I Headphones' 
                        priority
                    />
                </figure>
                <h4 className={styles.categoryName}>Headphones</h4>
                <Link href='/headphones'>
                    <a className={styles.buttonThree}><p>Shop</p><span></span></a>
                </Link>
            </li>
            <li className={styles.categoryContainer}>
                <figure className={styles.speakerImage}>
                    <Image 
                        src={speakerImage} 
                        layout="fill"
                        objectFit='contain' 
                        alt='YX1 Earphones'
                        priority
                    />
                </figure>
                <h4 className={styles.categoryName}>Speakers</h4>
                <Link href='/speakers'>
                    <a className={styles.buttonThree}><p>Shop</p><span></span></a>
                </Link>
            </li>
            <li className={styles.categoryContainer}>
                <figure className={styles.earphoneImage}>
                    <Image 
                        src={earphoneImage} 
                        layout="fill"
                        objectFit='contain' 
                        alt='ZX9 Speaker' 
                        priority
                    />
                </figure>
                <h4 className={styles.categoryName}>Earphones</h4>
                <Link href='/earphones'>
                    <a className={styles.buttonThree}><p>Shop</p><span></span></a>
                </Link>
            </li>
        </ul>
    )
}

export default CategoryPicker