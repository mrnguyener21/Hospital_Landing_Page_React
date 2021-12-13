import styles from './NavBar.module.css'

const NavBar = ({navBarLinks, images:{magnifyingGlass, logIn, hamburgerMenu}}) => {
    console.log(navBarLinks)
    return (
        <div className={styles.navBar}>
            <h1 className={styles.logo}>PROJECT HOSPITAL</h1>

            <div className={styles.navBarLinksContainer}>
                {navBarLinks.map(navBarLink => <h1 className={styles.navBarLink}>{navBarLink}</h1>)}
            </div>
            <div className={styles.searchAndLoginContainer}>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search..." className={styles.searchBar}/>
                    <button type='button' className={styles.searchButton}>
                        <img src = {magnifyingGlass} alt="magnifying Glass SVG" className={styles.searchImage}/>
                    </button>
                </div>
                <div className={styles.logInContainer}>
                    <img src={logIn} alt="logIn SVG" className={styles.logInImage}/>
                    <div className={styles.logInText}>login</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar