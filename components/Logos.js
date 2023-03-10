import styles from '@/styles/Logos.module.css'
import cafebean3 from '../public/cafebean3.jpg'
import Image from 'next/image';
const Logos = () => {
    return ( 
        <div className={styles.logos}>
            <div className={styles.logosItem}>
            <Image src={cafebean3} width = "200"/>LOGO
            </div>
            <div className={styles.logosItem}><Image src={cafebean3} width = "200"/>LOGO</div>
            <div className={styles.logosItem}><Image src={cafebean3} width = "200"/>LOGO</div>
            <div className={styles.logosItem}><Image src={cafebean3} width = "200"/>LOGO</div>
            <div className={styles.logosItem}><Image src={cafebean3} width = "200"/>LOGO</div>
            <div className={styles.logosItem}><Image src={cafebean3} width = "200"/>LOGO</div>
        </div>
     );
}
 
export default Logos;