import Image from "next/image"
import Link from "next/link"
import headphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerImage from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneImage from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'

const CategoryPicker = () => {
    return (
        <ul>
            <li>
                <figure>
                    <Image 
                        src={headphoneImage} 
                        // layout="fill"
                        // objectFit='contain' 
                        alt='XX99 Mark I Headphones' 
                        priority
                    />
                </figure>
                <p>Headphones</p>
                <Link href='/headphones'>
                    <a className="button-three"><p>Shop</p><span></span></a>
                </Link>
            </li>
            <li>
                <figure>
                    <Image 
                        src={speakerImage} 
                        // layout="fill"
                        // objectFit='contain' 
                        alt='YX1 Earphones'
                        priority
                    />
                </figure>
                <p>Speakers</p>
                <Link href='/speakers'>
                    <a className="button-three">Shop</a>
                </Link>
            </li>
            <li>
                <figure>
                    <Image 
                        src={earphoneImage} 
                        // layout="fill"
                        // objectFit='contain' 
                        alt='ZX9 Speaker' 
                        priority
                    />
                </figure>
                <p>Earphones</p>
                <Link href='/earphones'>
                    <a className="button-three">Shop</a>
                </Link>
            </li>
        </ul>
    )
}

export default CategoryPicker