import styles from './Footer.module.css'

const Footer = ({footerLinks, images:{envelope, facebook, linkedin, twitter}}) => {
    return (
        <div className={styles.resourceSection}>
        <div className={styles.leftResourceCotainer}>
            <div className={styles.emailContainer}>
                <button type='button' className={styles.emailButton}>
                    <img src = {envelope} alt={"envelope SVG"} className={styles.emailImage}/>
                    GET EMAIL UPDATES  -  Stay up to date with us
                </button>
                <button type='button' className={styles.emailButtonMobile}>
                    <img src = {envelope} alt="envelope SVG" className={styles.emailImage}/>
                    GET EMAIL UPDATES
                </button>
            </div>
            <div className={styles.socialMediaContainer}>
                <h2 className={styles.ssocialMediaTitle}>Connect with us on Social Media</h2>
                <div className={styles.socialMediaImageContainer}>
                    <img src = {facebook} alt={"facebook SVG"} className={styles.socialMediaImage}/>
                    <img src = {linkedin} alt={"linkedin SVG"} className={styles.socialMediaImage}/>
                    <img src = {twitter} alt={"twitter SVG"} className={styles.socialMediaImage}/>
                </div>
            </div>
            <div className={styles.disclaimer}>
                *disclaimer:This is a web project and is not an actual hospital. Inspiration for design came from the following: wellapp.com, dignityhealth.org
            </div>
        </div>
        <div className={styles.srightResourceContainer}> 
            {footerLinks.map(({links, title}) =>
                <div className={styles.footerLinksContainer}>
                    <h3 className={styles.footerLinktitle}>{title}</h3>
                    <div className={styles.footerLink}>{links}</div>
                </div>
            )}
        </div>
        <div className={styles.bottomDisclaimer}>
        *disclaimer:This is a web project and is not an actual hospital. Inspiration for design came from the following: wellapp.com, dignityhealth.org
        </div>
    </div>
    )
}

export default Footer