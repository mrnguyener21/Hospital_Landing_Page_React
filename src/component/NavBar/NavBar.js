import styles from './NavBar.module.css'

const NavBar = ({navBarLinks, images:{magnifyingGlass, logIn, hamburgerMenu}}) => {
    console.log(navBarLinks)
    return (
        <div className={styles.navBarContainer}>
            <h1 className={styles.logo}>PROJECT HOSPITAL</h1>

            <div className={styles.navBarLinksContainer}>
                {navBarLinks.map(link => <h1 className={styles.link}>{link}</h1>)}
            </div>

            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search..." className={styles.searchBar}/>
                <button type='button' className={styles.searchButton}>
                    <img src = {magnifyingGlass} alt="magnifying Glass SVG" class='searchImage'/>
                </button>
            </div>
        </div>
    )
}

export default NavBar