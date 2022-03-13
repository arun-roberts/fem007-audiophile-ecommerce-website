import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import CategoryPicker from '../components/CategoryPicker'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <>
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
      <main className="container">
        <CategoryPicker />
        <section>
          <article>
            <div>
              <h1>ZX9 speaker</h1>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link href='/speakers/zx9-speaker'><a className='other-button'>See product</a></Link>
            </div>
          </article>
          <article>
            <div>
              <h1>ZX7 speaker</h1>
              <Link href='/speakers/zx7-speaker'><a className='button-two'>See product</a></Link>
            </div>
          </article>
          <article>
            <figure aria-hidden="true"></figure>
            <div>
              <h1>YX1 earphones</h1>
              <Link href='/earphones/yx1-earphones'><a className='button-two'>See product</a></Link>
            </div>
          </article>
        </section>
        <About />
      </main>
    </>
  )
}

export default Home
