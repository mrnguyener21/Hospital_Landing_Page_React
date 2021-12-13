import styles from './NavBar.module.css'

const NavBar = ({navBarLinks}) => {
    console.log(navBarLinks)
    return (
        <div className={styles.navBarLinks}>
            {navBarLinks}
        </div>
    )
}

export default NavBar