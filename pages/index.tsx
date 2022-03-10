import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryPicker from '../components/CategoryPicker'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <div>
          <h6>New product</h6>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link href='/headphones/xx99-mark-ii'>
            <a className='button-one'>See product</a>
          </Link>
        </div>
      </section>
      <main>
        <CategoryPicker />
        <section>
          <div>
            <div>
              <h1>ZX9 speaker</h1>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button>See product</button>
            </div>
          </div>
          <div>
            <div>
              <h1>ZX7 speaker</h1>
              <button>See product</button>
            </div>
          </div>
          <div>
            <div aria-hidden="true"></div>
            <div>
              <h1>YX1 earphones</h1>
              <button>See product</button>
            </div>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default Home
