import styles from './NavBar.module.css'

const NavBar = ({navBarLinks}) => {
    console.log(navBarLinks)
    return (
        <div className={styles.navBarLinks}>
            {navBarLinks.map(link => <h1 className={styles.link}>{link}</h1>)}
        </div>
    )
}

export default NavBar