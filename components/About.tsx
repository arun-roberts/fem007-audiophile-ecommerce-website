import Image from "next/image"
import image from '../public/assets/shared/desktop/image-best-gear.jpg'

const About = () => {
    return (
        <section>
            <div>
                <h2>Bringing you the <span>best</span> audio gear</h2>
                <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.
                </p>
            </div>
            <figure>
                <Image 
                    src={image} 
                    layout="fill"
                    objectFit='contain' 
                    alt='Happy human listening thoughtfully on their new headphones' 
                    priority
                />
            </figure>
        </section>
    )
}

export default About