import styles from './Body.module.css'
const Body = ({serviceCards}) => {
    return (
        <div className={styles.cardSection}>
            <h1 className={styles.cardTitle}>Services We Offer</h1>
            <div className={styles.cardContainer}>
                {serviceCards.map(({image, description, button}) =>
                    <> 
                        <div className={styles.card}>
                            <img src = {image} alt={"Care Center SVG"} className={styles.cardImage}/>
                            <h1 className={styles.cardDescription}>{description}</h1>
                            <button className={styles.cardButton}>{button}</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Body
