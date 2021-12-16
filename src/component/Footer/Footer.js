import styles from './Footer.module.css'

const Footer = ({footerLinks, images:{envelope, facebook, linkedin, twitter}}) => {
    return (
        <div className={styles.resourceSection}>
        <div className={styles.leftResourceCotainer}>
            <div className={styles.emailContainer}>
                <button type='button' className={styles.emailButton}>
                    <img src = {envelope} alt={"envelope SVG"} className='emailImage'/>
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
                    <h3>{title}</h3>
                    {console.log(title)}
                    <div>{links}</div>
                </div>
            )}


            {/* <div className='companyContainer'>
                <h3 className='companyTitle'>COMPANY</h3>
                <div className='companyLink'>Careers</div>
                <div className='companyLink'>Partners & Integrations</div>
                <div className='companyLink'>About Us</div>
                <div className='companyLink'>Leadership</div>
                <div className='companyLink'>Support</div>
                <div className='companyLink'>Contact Us</div>
                <div className='companyLink'>News</div>
            </div>
            <div className='servicesContainer'>
                <h3 className='servicesTitle'>SERVICES</h3>
                <div className='servicesLink'>Care Center</div>
                <div className='servicesLink'>Emergency Services</div>
                <div className='servicesLink'>Heart Care</div>
                <div className='servicesLink'>Maternity</div>
                <div className='servicesLink'>Orthpedic Services</div>
                <div className='servicesLink'>Covid-19</div>
            </div>
            <div className='resourcesContainer'>
                <h3 className='resourcesTitle'>RESOURCES</h3>
                <div className='resourcesLink'>Case Studies</div>
                <div className='resourcesLink'>White Papers</div>
                <div className='resourcesLink'>Blog</div>
                <div className='resourcesLink'>Newsroom</div>
            </div> */}
        </div>
        <div className={styles.bottomDisclaimer}>
        *disclaimer:This is a web project and is not an actual hospital. Inspiration for design came from the following: wellapp.com, dignityhealth.org
        </div>
    </div>
    )
}

export default Footer