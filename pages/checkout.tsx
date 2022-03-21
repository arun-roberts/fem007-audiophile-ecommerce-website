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
        <div className={styles.checkout}>
            <section>
                <h1>Checkout</h1>
                <form action="">
                    <section>
                        <h4>Billing details</h4>
                        <div>
                            <label>Name
                            <input 
                                type="text" 
                                name="name" 
                                value={info.name}
                                onChange={handleChange} 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Email
                            <input 
                                type="text" 
                                name="email" 
                                value={info.email}
                                onChange={handleChange} 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Phone
                            <input 
                                type="text" 
                                name="phone" 
                                value={info.phone}
                                onChange={handleChange} 
                            />
                            </label>
                        </div>
                    </section>
                    <section>
                        <h4>Shipping info</h4>
                    </section>
                    <section>
                        <h4>Payment details</h4>
                    </section>
                </form>
            </section>
            <section></section>
        </div>
    )
}

export default Checkout