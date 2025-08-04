import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import InteriorPaintingImg from "../assets/interiorPaintImg.jpeg";
import LabourPaintingImg from "../assets/labourPainting.jpg";
import LabourPaintImg2 from "../assets/LabourImg2.jpg"
import TextureImg from '../assets/textureImg.png';


const images = [
    LabourPaintImg2,
    InteriorPaintingImg,
    "https://www.nobroker.in/blog/wp-content/uploads/2024/09/best-wall-putty-designs-for-home.png",
    "https://www.decoraid.com/wp-content/uploads/2021/04/modern-yellow-and-gray-living-room-2048x1536.jpeg"
];



export default function ImageSlider() {
    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
                background: `url(${LabourPaintImg2})`,
                backgroundSize: "cover",
                backgroundPosition : "center"
            }}
        >
           
        </div>
    );
}