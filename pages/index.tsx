// TYPES
import type { NextPage } from 'next'
import { StaticImageTypes } from "../lib/types"
// NEXT IMPORTS
import Image from 'next/image'
import Link from 'next/link'
// REACT IMPORTS
import { useContext } from "react"
// COMPONENTS
import CategoryPicker from '../components/CategoryPicker'
import About from '../components/About'
// LOCAL IMPORTS
import styles from '../styles/pages/Home.module.css'
import AppContext from "../lib/context"
import zx9Desktop from '../public/assets/home/desktop/image-speaker-zx9.png'
import zx9Tablet from '../public/assets/home/tablet/image-speaker-zx9.png'
import zx9Mobile from '../public/assets/home/mobile/image-speaker-zx9.png'
import yx1Desktop from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import yx1Tablet from '../public/assets/home/tablet/image-earphones-yx1.jpg'
import yx1Mobile from '../public/assets/home/mobile/image-earphones-yx1.jpg'

const Home: NextPage = () => {
  const value = useContext(AppContext)
  let { device } = value.state
  let zx9Images: StaticImageTypes = { desktop: zx9Desktop, tablet: zx9Tablet, mobile: zx9Mobile }
  let yx1Images: StaticImageTypes = { desktop: yx1Desktop, tablet: yx1Tablet, mobile: yx1Mobile }
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <div className={styles.banner_ad}>
          <h6 className={styles.banner_ad__status}>New product</h6>
          <h1 className={styles.banner_ad__heading}>XX99 Mark II Headphones</h1>
          <p className={styles.banner_ad__description}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link href='/headphones/xx99-mark-two-headphones'>
            <a className={styles.banner_ad__button}>See product</a>
          </Link>
        </div>
      </section>
      <main className="container">
        <CategoryPicker />
        <section className={styles.ads}>
          <article className={styles.ads_large}>
            <figure className={styles.ads_large__image}>
              <Image 
                src={zx9Images[device]}
                layout="fill"
                objectFit='contain' 
                alt='ZX9 speaker'
              />
            </figure>
            <div className={styles.ads_large_text}>
              <h1 className={styles.ads_large_text__heading}>ZX9 speaker</h1>
              <p className={styles.ads_large_text__body}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link href='/speakers/zx9-speaker'><a className={styles.ads_large_text__button}>See product</a></Link>
            </div>
          </article>
          <article className={styles.ads_medium}>
            <div className={styles.ads_medium_text}>
              <h1 className={styles.ads_medium_text__heading}>ZX7 speaker</h1>
              <Link href='/speakers/zx7-speaker'><a className={styles.ads_medium_text__button}>See product</a></Link>
            </div>
          </article>
          <article className={styles.ads_split}>
            <figure className={styles.ads_split__image}>
              <Image 
                src={yx1Images[device]}
                layout="fill"
                objectFit='contain' 
                alt='YX1 earphones'
              />
            </figure>
            <div className={styles.ads_split_text}>
              <h1 className={styles.ads_split_text__heading}>YX1 earphones</h1>
              <Link href='/earphones/yx1-earphones'><a className={styles.ads_split_text__button}>See product</a></Link>
            </div>
          </article>
        </section>
        <About />
      </main>
    </div>
  )
}

export default Home
