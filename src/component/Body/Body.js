import styles from './Body.module.css'
const Body = ({serviceCards}) => {
    console.log(serviceCards);
    return (
        <div className={styles.cardSection}>
            <h1 className={styles.cardTitle}>Services We Offer</h1>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    {serviceCards.map(({image, description, button}) =>
                        <> 
                        <img src = {image} alt={"Care Center SVG"} className={styles.cardImage}/>
                        <h1>{description}</h1>
                        <button>{button}</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Body
