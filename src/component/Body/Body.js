import styles from './Body.module.css'

const Body = ({serviceCards}) => {
    return (
        <div className={styles.card}>
            {/* {serviceCards.map(({image,description, button}) =>
                <>
                <img src = {image} alt={"Care Center SVG"} className={styles.cardImage}/>
                <h1>{description}</h1>
                <button>{button}</button>
                </>
                
            )} */}
            body
        </div>
    )
}

export default Body