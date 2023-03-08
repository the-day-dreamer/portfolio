import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                LOGO
            </div>
            <div className={styles.navbarRight}>
               <div className={styles.navbarItem}>Home</div>
                
                <div className={styles.navbarItem}>About</div>
                <div className={styles.navbarItem}>Services</div>
                <div className={styles.navbarItem}>Portfolio</div>
                <div className={styles.navbarItem}>Contact</div>
            </div>

        </div>
     );
}
 
export default Navbar;