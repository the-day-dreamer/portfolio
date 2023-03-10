import styles from '@/styles/Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Slider from './Slider';
const Testimonials = () => {
    
    return (
        
        <div className={styles.testimonials} id="testimonials">
            <div className={styles.testimonialsTitle}>Testimonials</div>
            <div className={styles.testimonialsLine}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.testimonialsSwiper}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>
                    <SwiperSlide><Slider/></SwiperSlide>

                    ...
                </Swiper>
            </div>
            <div className={styles.testimonialsBlock}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </div>
    );
}

export default Testimonials;