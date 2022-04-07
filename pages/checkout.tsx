import { useRouter } from "next/router"
import Image from 'next/image'
import { useState, useContext, useEffect } from "react"
import AppContext from "../lib/context"
import styles from '../styles/pages/Checkout.module.css'
import { CartItem } from '../lib/types'
import Confirmation from '../components/Confirmation'
import CartItemDisplay from '../components/CartItemDisplay'

interface Customer {
    [key: string]: string
}

const customerInfo: Customer = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
    eMoney: '',
    ePin: ''
}

const Checkout = () => {
    const [ info, setInfo ] = useState({ ...customerInfo })
    const [ isConfirmed, setIsConfirmed ] = useState<boolean>(false)
    const router = useRouter()
    const value = useContext(AppContext)
    let { shoppingCart }: { shoppingCart: CartItem[] } = value.state
    let total = shoppingCart.reduce((a: number, b: CartItem) => b.price * b.number + a, 0)
        , vat = total * 0.2

    const handleChange = (e: {target: { name: string, value: string }}) => {
        const name = e.target.name
        const value = e.target.value
        let working = {...info}
        working[name] = value
        setInfo(working)
    }

    shoppingCart.sort((a: CartItem, b: CartItem) => b.price - a.price)

    return (
        <div className='container'>
            <form className={styles.checkout}>
                <button 
                    className={styles.back_button}
                    type='button'
                    onClick={() => router.back()}
                >Go Back</button> 
                <main className={styles.checkout_details}>
                    <h1 className={styles.checkout_details__heading}>Checkout</h1>
                        <section className={`${styles.checkout_details_section} ${styles.checkout_details_section___billing}`}>
                            <h4 className={styles.checkout_details_section__heading}>Billing details</h4>
                            <div className={styles.checkout_details_section__container}>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id='name'
                                        placeholder='Alexei Ward'
                                        value={info.name}
                                        onChange={handleChange} 
                                        className={styles.checkout_details_section_item__input}
                                        />
                                </div>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>Email</label>
                                    <input 
                                        type="text" 
                                        name="email"
                                        id='email' 
                                        placeholder="alexei@mail.com"
                                        value={info.email}
                                        onChange={handleChange} 
                                        className={styles.checkout_details_section_item__input}
                                        />
                                </div>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>Phone</label>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        id='phone'
                                        placeholder="+1202-555-0136"
                                        value={info.phone}
                                        onChange={handleChange} 
                                        className={styles.checkout_details_section_item__input}
                                        />
                                </div>
                            </div>
                        </section>
                        <section className={`${styles.checkout_details_section} ${styles.checkout_details_section___shipping}`}>
                            <h4 className={styles.checkout_details_section__heading}>Shipping info</h4>
                            <div className={styles.checkout_details_section__container}>
                                <div className={`${styles.checkout_details_section_item} ${styles.checkout_details_section_item___address}`}>
                                    <label className={styles.checkout_details_section_item__label}>Your Address</label>
                                        <input 
                                            type="text" 
                                            name="address"
                                            id='address'
                                            placeholder="1137 Williams Ave"
                                            value={info.address}
                                            onChange={handleChange} 
                                            className={styles.checkout_details_section_item__input}
                                            />
                                </div>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>ZIP Code</label>
                                        <input 
                                            type="text" 
                                            name="zip"
                                            id='zip'
                                            placeholder="10001"
                                            value={info.zip}
                                            onChange={handleChange} 
                                            className={styles.checkout_details_section_item__input}
                                            />
                                </div>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>City</label>
                                        <input 
                                            type="text" 
                                            name="city"
                                            id='city'
                                            placeholder='New York'
                                            value={info.city}
                                            onChange={handleChange} 
                                            className={styles.checkout_details_section_item__input}
                                            />
                                </div>
                                <div className={styles.checkout_details_section_item}>
                                    <label className={styles.checkout_details_section_item__label}>Country</label>
                                        <input 
                                            type="text" 
                                            name="country"
                                            id='country'
                                            placeholder="United States"
                                            value={info.country}
                                            onChange={handleChange} 
                                            className={styles.checkout_details_section_item__input}
                                            />
                                </div>
                            </div>
                        </section>
                        <section className={`${styles.checkout_details_section} ${styles.checkout_details_section___payment}`}>
                            <h4 className={styles.checkout_details_section__heading}>Payment details</h4>
                            <div className={styles.checkout_details_section__container}>
                                <div className={`${styles.checkout_details_section_item} ${styles.checkout_details_section_item___radio}`}>
                                    <label className={styles.checkout_details_section_item__label}>Payment Method</label>
                                        <div className={styles.radio}>
                                            <input 
                                                type="radio" 
                                                name="payment" 
                                                value='e-Money'
                                                id='e-Money'
                                                onChange={handleChange}
                                                className={styles.radio__input}
                                                />
                                            <div className={styles.radio_displayed}>
                                                <label className={styles.radio_displayed__label} htmlFor='e-Money'>e-Money</label>
                                            </div>
                                        </div>
                                        <div className={styles.radio}>
                                            <input 
                                                type="radio" 
                                                name="payment" 
                                                value='Cash on Delivery'
                                                id='Cash on Delivery' 
                                                onChange={handleChange}
                                                className={styles.radio__input}
                                                />
                                            <div className={styles.radio_displayed}>
                                                <label className={styles.radio_displayed__label} htmlFor='Cash on Delivery'>Cash on Delivery</label>
                                            </div>
                                        </div>
                                </div>
                                {info.payment == 'e-Money' &&
                                    <>
                                        <div className={styles.checkout_details_section_item}>
                                            <label
                                                htmlFor="eMoney" 
                                                className={styles.checkout_details_section_item__label}
                                                >e-Money Number</label>
                                            <input 
                                                type="text" 
                                                name="eMoney" 
                                                id='eMoney'
                                                placeholder="238521993"
                                                value={info.eMoney}
                                                onChange={handleChange}
                                                className={styles.checkout_details_section_item__input}
                                                />
                                        </div>
                                        <div className={styles.checkout_details_section_item}>
                                            <label
                                                htmlFor="ePin" 
                                                className={styles.checkout_details_section_item__label}
                                                >e-Money PIN</label>
                                            <input 
                                                type="text" 
                                                name="ePin" 
                                                id="ePin"
                                                placeholder="4649"
                                                value={info.ePin}
                                                onChange={handleChange}
                                                className={styles.checkout_details_section_item__input}
                                                />
                                        </div>
                                    </>
                                }
                            </div>
                        </section>
                </main>
                <section className={styles.checkout_summary}>
                    <h2 className={styles.checkout_summary__heading}>Summary</h2>
                    <div className={styles.checkout_summary_display}>{shoppingCart.map((e: CartItem, i: number) => e && (
                        <CartItemDisplay product={e} key={i} withMath={false} size='large' />
                    ))}</div>
                    <dl className={styles.checkout_summary_money}>
                        <div className={styles.checkout_summary_money_item}>
                            <dt className={styles.checkout_summary_money_item__heading}>Total</dt>
                            <dd className={styles.checkout_summary_money_item__number}>{total.toLocaleString()}</dd>
                        </div>
                        <div className={styles.checkout_summary_money_item}>
                            <dt className={styles.checkout_summary_money_item__heading}>Shipping</dt>
                            <dd className={styles.checkout_summary_money_item__number}>50</dd>
                        </div>
                        <div className={styles.checkout_summary_money_item}>
                            <dt className={styles.checkout_summary_money_item__heading}>Vat (included)</dt>
                            <dd className={styles.checkout_summary_money_item__number}>{
                                Number.isInteger(vat) 
                                ? vat.toLocaleString() 
                                : vat.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })
                            }</dd>
                        </div>
                        <div className={`${styles.checkout_summary_money_item} ${styles.checkout_summary_money_item___grand}`}>
                            <dt className={styles.checkout_summary_money_item__heading}>Grand Total</dt>
                            <dd className={`${styles.checkout_summary_money_item__number} ${styles.checkout_summary_money_item__number___grand}`}>{(total + 50).toLocaleString()}</dd>
                        </div>
                    </dl>
                    <button 
                        type='button' 
                        onClick={() => {
                            setIsConfirmed(true)
                        }} 
                        className={styles.checkout_summary__pay}
                    >Continue & pay</button>
                </section>
            </form>
            {isConfirmed && 
                <div
                    className={styles.confirmation}
                    aria-hidden='true'
                >
                    <dialog className={styles.confirmation__modal} open={true}>
                        <Confirmation products={shoppingCart} />
                    </dialog>
                </div>
            }
        </div>
    )
}

export default Checkout