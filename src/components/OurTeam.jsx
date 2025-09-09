import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from './Heading';
import Arun from "../assets/team/Arun.jpg";
import Ashok from "../assets/team/Ashok.jpg";
import Deepak from "../assets/team/Deepak.jpg";
import Eshwar from "../assets/team/Eshwar.jpg";
import Hemant from "../assets/team/Hemant.jpg";
import Keshav from "../assets/team/Keshav.jpg";
import Madhav from "../assets/team/Madhav.jpg";
import Sunil from "../assets/team/Sunil.jpg";
import Tukaram from "../assets/team/Tukaram.jpg";
import Uttam from "../assets/team/Uttam.jpg";
import Ranjit from "../assets/team/Ranjit.jpg";

const teamMembers = [
    { name: "Keshav", role: "Site Manager", exp:"", img: Keshav },
    { name: "Hemant", role: "Executive Manager / Supervisor", exp:"", img: Hemant },
    { name: "Uttam", role: "Super Senior", exp:"", img: Uttam },
    { name: "Eshwar", role: "", exp: "8 Years Experience", img: Eshwar },
    { name: "Ranjit", role: "", exp: "12 Years Experience", img: Ranjit },
    { name: "Ashok", role: "", exp: "10 Years Experience", img: Ashok },
    { name: "Tukaram", role: "", exp:"4 Years Experience", img: Tukaram },
    { name: "Madhav", role: "", exp:"5 Years Experience", img: Madhav },
    { name: "Deepak", role: "", exp: "6 Years Experience", img: Deepak },
    { name: "Sunil", role: "", exp: "9 Years Experience", img: Sunil },
    { name: "Arun", role: "", exp:"2 Years Experience", img: Arun },
];




export default function TeamCarousel() {
    return (
        <div className="py-12 px-12">
            <Heading text={ "Our Experts" } />

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
                            <img
                                src={member?.img}
                                alt={member?.name}
                                className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="font-bold text-black text-lg">{member?.name}</h3>
                            <p className="text-gray-900 text-base">{member?.role}</p>
                            <p className="text-gray-800 text-base">{member?.exp}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}



