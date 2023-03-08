import styles from '@/styles/Homepage.module.css'
import Image from 'next/image';
import chris1 from '../public/chris1.jpg'
const Home = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.homepageLeft}>
                <div className={styles.leftText1}>
                    Chris
                </div>
                <div className={styles.leftText2}>
                    Professional UI/UX
                </div>
                <div className={styles.leftText3}>
                    designer
                </div>
                <div className={styles.buttonDiv}><button className={styles.contactButton}>CONTACT ME</button></div>
            </div>
            <div className={styles.homepageMiddle}>
                <div className={styles.middleImage}>
                    <Image className={styles.image} fill 
                        objectFit="contain"  src={chris1} />
                </div>
            </div>
            <div className={styles.homepageRight}>
                <div className={styles.rightText1}>
                    Hemesworth
                </div>
                <div className={styles.rightText2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ad, distinctio, consectetur quasi quo accusantium praesentium
                </div>
            </div>
        </div>
    );
}

export default Home;