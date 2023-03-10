import styles from '@/styles/Contact.module.css'
import Image from 'next/image';
import handshake from '../public/handshake.jpg'
const Contact = () => {
    return (
        <div className={styles.contact} id="contact">
            <div className={styles.contactTitle}>Contact Me</div>
            <div className={styles.contactLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.contactLeftRight}>
                <div className={styles.contactLeft}>
                    <div className={styles.leftBox}>
                        <Image className={styles.leftImage} src={handshake} width="250" />
                        <div className={styles.leftBoxText1}>Chris Hemesworth</div>
                        <div className={styles.leftBoxText2}>UI/UX designer</div>
                        <div className={styles.leftBoxText3}>I am always available at freelance work.Just connect me via a call.</div>
                        <div className={styles.leftBoxText4}>Email  : admin@chris.com</div>
                        <div className={styles.leftBoxText5}>phone : 2132433343545</div>
                    </div>
                </div>
                <div className={styles.contactRight}>
                    <div className={styles.formBox}>
                        <form className={styles.form}>
                            
                            <input type="text" placeholder='Full name' className={styles.inputName}/>
                            <input type="email" placeholder='Email address' className={styles.inputEmail}/>
                            <input type="text" placeholder='Subject' className={styles.inputSubject}/>
                            <textarea placeholder='Enter Your Message' className={styles.inputMessage} ></textarea>
                            <button className={styles.formButton}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;