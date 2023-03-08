import styles from '@/styles/About.module.css'
import Image from 'next/image';
import chris3 from '../public/chris3.png'
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutLeft}>
                <div className={styles.aboutLeftImage}>
                    <Image src={chris3} fill
                        objectFit="contain" />
                </div>
            </div>
            <div className={styles.aboutRight}>
                <div className={styles.aboutRightText1}>
                    About Me
                </div>
                <hr className={styles.hr} />
                <div className={styles.aboutRightText2}>
                    Hello there ! My name is Chris Hemesworth
                </div>
                <div className={styles.aboutRightText3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa iure soluta odio deserunt ex quaerat quidem dolorem cumque tempora?
                </div>
                <div className={styles.aboutRightText4}>
                    Skills
                </div>
                <hr className={styles.hr2} />
                <div className={styles.skillBox}>
                    <div className={styles.skillBoxLeft}>
                        <ul className={styles.skillBoxLeftList}>
                            <li className={styles.listItem}>Logo Design</li>
                            <li className={styles.listItem}>Brand Design</li>
                            <li className={styles.listItem}>LetterHead</li>
                            <li className={styles.listItem}>Brochure Design</li>
                            <li className={styles.listItem}>Icon Design</li>
                            <li className={styles.listItem}>Flyer Design</li>

                        </ul>
                    </div>
                    <div className={styles.skillBoxRight}>
                        <ul className={styles.skillBoxRightList}>
                            <li className={styles.listItem}>Poster Design</li>
                            <li className={styles.listItem}>Business Card</li>
                            <li className={styles.listItem}>Banner Design</li>
                            <li className={styles.listItem}>Leaflets</li>
                            <li className={styles.listItem}>Envelope Design</li>
                            <li className={styles.listItem}>Motion</li>
                        </ul>
                    </div>

                </div>
                <button className={styles.contactButton}>CONTACT ME</button>
            </div>
        </div>
    );
}

export default About;