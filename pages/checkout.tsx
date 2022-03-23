import { useRouter } from "next/router"
import { useState } from "react"
import styles from '../styles/pages/Checkout.module.css'

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
    const [ info, setInfo ] = useState({...customerInfo})
    const router = useRouter()

    const handleChange = (e: {target: { name: string, value: string }}) => {
        const name = e.target.name
        const value = e.target.value
        let working = {...info}
        working[name] = value
        setInfo(working)
    }

    return (
        <form className={styles.checkout}>
            <button 
                className={styles.back_button}
                type='button'
                onClick={() => router.back()}
            >Go Back</button> 
            <main className={styles.checkout_details}>
                <h1 className={styles.checkout_details__heading}>Checkout</h1>
                    <section className={styles.checkout_details_section}>
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
                                    value={info.phone}
                                    onChange={handleChange} 
                                    className={styles.checkout_details_section_item__input}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.checkout_details_section}>
                        <h4 className={styles.checkout_details_section__heading}>Shipping info</h4>
                        <div className={styles.checkout_details_section__container}>
                            <div className={styles.checkout_details_section_item}>
                                <label className={styles.checkout_details_section_item__label}>Your Address</label>
                                    <input 
                                        type="text" 
                                        name="address"
                                        id='address'
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
                                        value={info.country}
                                        onChange={handleChange} 
                                        className={styles.checkout_details_section_item__input}
                                    />
                            </div>
                        </div>
                    </section>
                    <section className={styles.checkout_details_section}>
                        <h4 className={styles.checkout_details_section__heading}>Payment details</h4>
                        <div className={styles.checkout_details_section__container}>
                            <div className={styles.checkout_details_section_item}>
                                <label className={styles.checkout_details_section_item__label}>Payment Method</label>
                                    <div className={styles.checkout_details_section_item__input}>
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            value='e-Money'
                                            id='e-Money'
                                            onChange={handleChange}
                                            className={styles.checkout_details_section_item__radio}
                                            
                                            />
                                        <label htmlFor='e-Money'>e-Money</label>
                                    </div>
                                    <div className={styles.checkout_details_section_item__input}>
                                        <input 
                                            type="radio" 
                                            name="payment" 
                                            value='Cash on Delivery'
                                            id='COD' 
                                            onChange={handleChange}
                                            // className={styles.checkout_details_section_item__input}
                                            />
                                        <label htmlFor='COD'>Cash on Delivery</label>
                                    </div>
                            </div>
                            {info.payment == 'e-Money' &&
                                <>
                                    <div className={styles.checkout_details_section_item}>
                                        <label className={styles.checkout_details_section_item__label}>
                                            e-Money Number
                                            <input 
                                                type="text" 
                                                name="eMoney" 
                                                id='eMoney'
                                                value={info.eMoney}
                                                onChange={handleChange}
                                                className={styles.checkout_details_section_item__input}
                                            />
                                        </label>
                                    </div>
                                    <div className={styles.checkout_details_section_item}>
                                        <label className={styles.checkout_details_section_item__label}>
                                            e-Money PIN
                                            <input 
                                                type="text" 
                                                name="ePin" 
                                                id="ePin"
                                                value={info.ePin}
                                                onChange={handleChange}
                                                className={styles.checkout_details_section_item__input}
                                            />
                                        </label>
                                    </div>
                                </>
                            }
                        </div>
                    </section>
            </main>
            <section>

            </section>
        </form>
    )
}

export default Checkout