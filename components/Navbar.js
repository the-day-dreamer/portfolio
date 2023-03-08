import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                LOGO
            </div>
            <div className={styles.navbarRight}>
               <a href="#homepage"><div className={styles.navbarItem}>Home</div></a>
                
                <a href="#about"><div className={styles.navbarItem}>About</div></a>
                <a href="#services"><div className={styles.navbarItem}>Services</div></a>
                <a href="#portfolio"><div className={styles.navbarItem}>Portfolio</div></a>
                <a href="#contact"><div className={styles.navbarItem}>Contact</div></a>
            </div>

        </div>
     );
}
 
export default Navbar;