import Image from "next/image"
import Link from "next/link"

const CategoryPicker = () => {
    return (
        <ul>
            <li>
                {/* <div>
                    <Image 
                        src={member.images.png.slice(1)} 
                        layout="fill"
                        objectFit='contain' 
                        alt={`Image of ${member.role} ${member.name}`} 
                        priority
                    />
                </div> */}
                <p>Headphones</p>
                <Link href='/headphones'>
                    <a>Shop</a>
                </Link>
            </li>
            <li>
                {/* <div>
                    <Image 
                        src={member.images.png.slice(1)} 
                        layout="fill"
                        objectFit='contain' 
                        alt={`Image of ${member.role} ${member.name}`} 
                        priority
                    />
                </div> */}
                <p>Speakers</p>
                <Link href='/speakers'>
                    <a>Shop</a>
                </Link>
            </li>
            <li>
                {/* <div>
                    <Image 
                        src={member.images.png.slice(1)} 
                        layout="fill"
                        objectFit='contain' 
                        alt={`Image of ${member.role} ${member.name}`} 
                        priority
                    />
                </div> */}
                <p>Earphones</p>
                <Link href='/earphones'>
                    <a>Shop</a>
                </Link>
            </li>
        </ul>
    )
}

export default CategoryPicker