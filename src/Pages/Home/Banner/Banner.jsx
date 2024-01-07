import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import slide1 from "../../../assets/Images/sport 1.jpeg"
import slide2 from "../../../assets/Images/sport 2.webp"
import slide3 from "../../../assets/Images/sport 3.jpeg"
import slide4 from "../../../assets/Images/sport 4.jpeg"
import slide5 from "../../../assets/Images/sport 5.jpeg"
import slide6 from "../../../assets/Images/sport 6.jpeg"

const Banner = () => {

    return (
        <div style={{ zIndex: 1 }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-96"
            >
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide1} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">Football Activities</h2>
                            <p className="text-black italic font-semibold">This game is students favourite sports category</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide2} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">Basketball Activities</h2>
                            <p className="text-black italic font-semibold">Its a very interesting sport.This is a very hard game to play.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide3} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">Cricket Activities</h2>
                            <p className="text-black italic font-semibold">In recent time cricket is one of the most popular sports.We have also this activities for the students.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide4} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">Badminton Activities</h2>
                            <p className="text-black italic font-semibold">Badminton is one of the activities we have for the students.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide5} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">High jump Activities</h2>
                            <p className="text-black italic font-semibold">We have also the game high jump.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img className="h-screen w-auto opacity-60" src={slide6} alt="" />
                        <div className="hero-content flex flex-col -mt-[500px] md:-mt-14">
                            <h2 className="text-amber-800 text-2xl font-bold">Merathon Activities</h2>
                            <p className="text-black italic font-semibold">Our academy also have the merathon so that students learn it and make a good career in this.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;