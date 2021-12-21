import styles from './NavBar.module.css'

const NavBar = ({navBarLinks, images:{magnifyingGlass, logIn, hamburgerMenu}}) => {
    return (
        <div className={styles.navBar}>
            <h1 className={styles.logo}>PROJECT HOSPITAL</h1>

            {/* <div className={styles.navBarLinksContainer}>
            </div> */}
            <div className={styles.searchAndLoginContainer}>
                {navBarLinks.map(navBarLink => <h3 className={styles.navBarLink}>{navBarLink}</h3>)}
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