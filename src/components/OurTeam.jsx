import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
    { name: "Robert Fox", role: "Sr. Product Manager", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Floyd Miles", role: "Sr. Product Manager", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Dianne Russell", role: "Sr. Product Manager", img: "https://randomuser.me/api/portraits/men/55.jpg" },
    { name: "Jacob Jones", role: "Sr. Product Manager", img: "https://randomuser.me/api/portraits/women/11.jpg" }
];

export default function TeamCarousel() {
    return (
        <div className="py-10">
            <h2 className="text-center text-purple-600 font-semibold">Marketing Team</h2>
            <h1 className="text-center text-3xl font-bold mb-6">The Awesome team behind our success</h1>

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
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="font-bold text-lg">{member.name}</h3>
                            <p className="text-purple-500 text-sm">{member.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
