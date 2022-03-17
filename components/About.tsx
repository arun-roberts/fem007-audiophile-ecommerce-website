import Image from "next/image"
import desktop from '../public/assets/shared/desktop/image-best-gear.jpg'
import tablet from '../public/assets/shared/tablet/image-best-gear.jpg'
import mobile from '../public/assets/shared/mobile/image-best-gear.jpg'
import { useContext } from "react"
import AppContext from "../lib/context"
import { StaticImageTypes } from "../lib/types"
import styles from '../styles/components/About.module.css'


const About = () => {
    const value = useContext(AppContext)
    let { device } = value.state
    let images: StaticImageTypes = { desktop, tablet, mobile }

    return (
        <article className={styles.about}>
            <figure className={styles.about__image}>
                <Image 
                    src={images[device]} 
                    layout="fill"
                    objectFit='contain' 
                    alt='Happy human listening thoughtfully on their new headphones' 
                    priority
                />
            </figure>
            <div className={styles.about_text}>
                <h2 className={styles.about_text__header}>Bringing you the <span>best</span> audio gear</h2>
                <p className={styles.about_text__body}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.
                </p>
            </div>
        </article>
    )
}

export default About