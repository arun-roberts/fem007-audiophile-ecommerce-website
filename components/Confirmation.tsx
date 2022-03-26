import Image from "next/image"
import Link from "next/link"
import styles from '../styles/components/Confirmation.module.css'

const Confirmation = () => {
    return (
        <div className={styles.sold}>
            <div aria-hidden={true} className={styles.sold__tick}></div>
            <section>
                <h1>Thank you<br/>for your order</h1>
                <p>You will receive an email confirmation shortly.</p>
            </section>
            <article>
                <section></section>
                <section>
                    <h2>Grand total</h2>
                    <p></p>
                </section>
            </article>
            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </div>
    )
}

export default Confirmation