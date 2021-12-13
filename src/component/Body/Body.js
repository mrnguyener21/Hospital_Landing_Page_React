import styles from './Body.module.css'

const Body = ({serviceCards}) => {
    return (
        <div className={styles.card}>
            {serviceCards.map((card) =>
                <>
                <h1>{card.description}</h1>
                <button>{card.button}</button>
                </>
                
            )}
        </div>
    )
}

export default Body