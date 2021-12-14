import styles from './Welcome.module.css'

const Welcome = ({images:{heart, mainBodyImage}}) => {
    return(
<div className={styles.welcomeSection}>
                <div className={styles.messageContainer}>
                    <h1 className={styles.welcomeMessage}>
                        Welcome to Project Hospital, where empthy is the driving force for our actions
                    </h1>
                    <img src = {heart} alt={"Heart SVG"} className={styles.welcomeMessageImage}/>
                </div>
                <img src = {mainBodyImage} alt={"Main Body SVG"} className={styles.welcomeImage}/>
            </div>
    )
}

export default Welcome