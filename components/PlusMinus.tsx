import styles from '../styles/components/PlusMinus.module.css'

const PlusMinus = ({minusHandler, current, plusHandler}: {minusHandler: () => void, current: number, plusHandler: () => void}) => {
    return (
        <ul className={styles.buyIt}>
            <li 
                className={styles.buyIt__math}
                onClick={minusHandler}
            >-</li>
            <li className={styles.buyIt__display}>{current}</li>
            <li 
                className={styles.buyIt__math}
                onClick={plusHandler} 
            >+</li>
        </ul>
    )
}

export default PlusMinus