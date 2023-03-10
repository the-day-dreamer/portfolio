import styles from '@/styles/Portfolio.module.css'
import { useState } from 'react';
import Logos from './Logos';
const Portfolio = () => {
    const [logos,setLogos] = useState(true);
    const [posters,setPosters] = useState(false);
    const [flyers,setFlyers] = useState(false);
    const handleClickLogos = ()=>{
        setLogos(true)
        setFlyers(false)
        setPosters(false)
        
    }
    const handleClickPosters = ()=>{
        setLogos(false)
        setFlyers(false)
        setPosters(true)
    }
    const handleClickFlyers = ()=>{
        setLogos(false)
        setFlyers(true)
        setPosters(false)
    }
    return (
        <div className={styles.portfolio} id="portfolio">
            <div className={styles.portfolioTitle}>
                Portfolio
            </div>
            <div className={styles.portfolioLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.portfolioButton}>
                <button className= {`${styles.button} ${styles.button1}`} onClick = {handleClickLogos}>LOGOS</button>
                <button className={`${styles.button} ${styles.button2}`} onClick = {handleClickPosters}>POSTERS</button>
                <button className={`${styles.button} ${styles.button3}`} onClick = {handleClickFlyers}>FLYERS</button>
            </div>
            <div className={styles.portfolioContainer}>
                {logos && (
                    <Logos/>
                )}
                {flyers && (
                    <div>flyers</div>
                )}
                {posters && (
                    <div>poster</div>
                )}
            </div>
            <div className={styles.portfolioButton2}>
                <button className={styles.viewMore}>VIEW MORE</button>
            </div>
        </div>
    );
}

export default Portfolio;