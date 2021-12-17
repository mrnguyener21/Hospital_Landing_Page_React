import styles from './Body.module.css'
import CareCenter from "../../images"
const Body = ({serviceCards}) => {
    console.log(serviceCards);
    return (
        <div className={styles.card}>
            {serviceCards.map(({image, description, button}) =>
                <> 
                {console.log(image)}
                <img src = {image} alt={"Care Center SVG"} className={styles.cardImage}/>
                <h1>{description}</h1>
                <button>{button}</button>
                </>
                
             )}
            {/* body */}
        </div>
    )
}

export default Body
