import styles from './Footer.module.css'

const Footer = ({footerLinks}) => {
    // console.log(footerLinks[0].links)
    return (
        <div>
            {footerLinks.map((footerLink) => 
            <>
            {console.log(footerLink)}
            <h1>{footerLink.title}</h1>
            {footerLink.links.map((linkName) =><h3>{linkName}</h3>)}
            </>
            )}
        </div>
    )
}

export default Footer