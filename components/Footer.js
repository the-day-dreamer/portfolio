import styles from '@/styles/Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLeft}>
                <FacebookIcon fontSize='large' className={styles.icons} />
                <GitHubIcon fontSize='large' className={styles.icons} />
                <YouTubeIcon fontSize='large' className={styles.icons} />
                <InstagramIcon fontSize='large' className={styles.icons} />

            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerText}>&#169;2023 All rights reserved by Aman</div>
            </div>
        </div>
    );
}

export default Footer;
