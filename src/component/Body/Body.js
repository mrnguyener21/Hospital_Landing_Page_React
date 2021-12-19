import styles from './Body.module.css'
const Body = ({serviceCards}) => {
    console.log(serviceCards);
    return (
        <div className={styles.card}>
            {serviceCards.map(({image, description, button}) =>
                <> 
                <img src = {image} alt={"Care Center SVG"} className={styles.cardImage}/>
                <h1>{description}</h1>
                <button>{button}</button>
                </>
                
             )}
        </div>
    )
}

export default Body
