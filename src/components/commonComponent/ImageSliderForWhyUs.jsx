import React,{useEffect} from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import AOS from "aos";
import 'aos/dist/aos.css';


const imagesForWhyUs = [
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/9/Wall-Paint-Ideas-Abstract-Teal-Design_0_1200.jpg.webp",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/3/Matte-Wall-Painting-Design_0_1200.jpg.webp",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/monochromatic_wall_paint_0_1200.jpg.webp",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/painted-ceiling_wall_paint_0_1200.jpg.webp"
]

const ImageSliderForWhyUs = () => {

        useEffect(() => {
            AOS.init({
                duration: 500,
                once: true,
            });
        }, []);

    return (
        <div data-aos="fade-right" className='h-[120%] w-1/2 rounded-xl transition-transform duration-400 hover:scale-[101%] overflow-hidden'>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                slidesPerView={1}
                className="absolute top-0 left-0 w-full h-full z-0"
            >
                {imagesForWhyUs?.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSliderForWhyUs;
