import styles from '@/styles/Services.module.css'
import LogoDevIcon from '@mui/icons-material/LogoDev';
const Services = () => {
    return (
        <div className={styles.services} id="services">
            <div className={styles.servicesTitle}>
                My Services
            </div>
            <div className={styles.servicesLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.servicesBox}>
                <div className={styles.servicesItem}>
                    <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>

                </div>
                <div className={styles.servicesItem}>
                <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>
                </div>
                <div className={styles.servicesItem}>
                <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>
                </div>
                <div className={styles.servicesItem}>
                <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>
                </div>
                <div className={styles.servicesItem}>
                <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>
                </div>
                <div className={styles.servicesItem}>
                <div className={styles.itemIcon}><LogoDevIcon fontSize='large' className={styles.icon} /></div>
                    <div className={styles.itemText1}>LOGO DESIGN</div>
                    <div className={styles.itemText2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis harum, est aliquid tenetur iste adipisci labore. Laboriosam, quam assumenda!</div>
                </div>
            </div>
        </div>
    );
}

export default Services;