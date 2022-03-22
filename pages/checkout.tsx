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

    const handleChange = (e: {target: { name: string, value: string }}) => {
        const name = e.target.name
        const value = e.target.value
        let working = {...info}
        working[name] = value
        setInfo(working)
    }

    return (
        <form className={styles.checkout}>
            <main className={styles.checkout_details}>
                <h1 className={styles.checkout_details__heading}>Checkout</h1>
                    <section className={styles.checkout_details_form_section}>
                        <h4 className={styles.checkout_details_form_section__heading}>Billing details</h4>
                            <label className={styles.checkout_details_form_section__label}>Name
                            <input 
                                type="text" 
                                name="name" 
                                value={info.name}
                                onChange={handleChange} 
                                className={styles.checkout_details_form_section__input}
                            />
                            </label>
                            <label className={styles.checkout_details_form_section__label}>Email
                            <input 
                                type="text" 
                                name="email" 
                                value={info.email}
                                onChange={handleChange} 
                                className={styles.checkout_details_form_section__input}
                            />
                            </label>
                            <label className={styles.checkout_details_form_section__label}>Phone
                            <input 
                                type="text" 
                                name="phone" 
                                value={info.phone}
                                onChange={handleChange} 
                                className={styles.checkout_details_form_section__input}
                            />
                            </label>
                    </section>
                    <section>
                        <h4>Shipping info</h4>
                        <div>
                            <label>
                                Your Address
                                <input 
                                    type="text" 
                                    name="address"
                                    value={info.address}
                                    onChange={handleChange} 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                ZIP Code
                                <input 
                                    type="text" 
                                    name="zip"
                                    value={info.zip}
                                    onChange={handleChange} 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                City
                                <input 
                                    type="text" 
                                    name="city"
                                    value={info.city}
                                    onChange={handleChange} 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Country
                                <input 
                                    type="text" 
                                    name="country"
                                    value={info.country}
                                    onChange={handleChange} 
                                />
                            </label>
                        </div>
                    </section>
                    <section>
                        <h4>Payment details</h4>
                        <div>
                            <label>
                                Payment Method
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value='e-Money'
                                        onChange={handleChange}
                                    />
                                    e-Money
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value='Cash on Delivery' 
                                        onChange={handleChange}
                                    />
                                    Cash on Delivery
                                </label>
                            </label>
                        </div>
                        {info.payment == 'e-Money' &&
                            <>
                                <div>
                                    <label>
                                        e-Money Number
                                        <input 
                                            type="text" 
                                            name="eMoney" 
                                            value={info.eMoney}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        e-Money PIN
                                        <input 
                                            type="text" 
                                            name="ePin" 
                                            value={info.ePin}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </>
                        }
                    </section>
            </main>
            <section>

            </section>
        </form>
    )
}

export default Checkout