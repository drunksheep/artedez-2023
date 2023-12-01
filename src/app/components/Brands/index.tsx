'use client';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Brands() {
    return (
        <section className="relative">

            <div className="container">
                <div className="w-7/12 pt-14">
                    <h2 className="text-white font-bold font-nexa text-40 uppercase mb-[40px] leading-[40px]">
                        marcas que confiaram
                        <span className="text-56 block leading-[52px]">
                            no nosso trabalho
                        </span>
                    </h2>
                    <p className="text-white text-18 leading-[24px] w-[80%]">
                        <strong>Junte-se às grandes empresas que já trabalharam conosco</strong> <br /> Confira algumas das marcas que escolheram ter grandes resultados através dos nossos serviços
                    </p>
                </div>
            </div>

            <div className="absolute right-0 top-0 w-[840px]">
                <div className="absolute w-[300px] top-0 h-full z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />

                <Swiper
                    spaceBetween={40}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    loop
                    allowTouchMove={false}
                    slidesPerView={4}
                    centeredSlides
                    modules={[Autoplay]}
                >
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        1
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        2
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        3
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        4
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        5
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        6
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    className='mt-10'
                    spaceBetween={40}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    loop
                    allowTouchMove={false}
                    slidesPerView={4}
                    centeredSlides
                    modules={[Autoplay]}
                >
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        1
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        2
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        3
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        4
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        5
                    </SwiperSlide>
                    <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl">
                        6
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}