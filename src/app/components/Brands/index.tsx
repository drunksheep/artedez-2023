'use client';

import { firstBrandCarouselContent, secondBrandCarouselContent } from '@/app/content/brand';
import { BrandContent } from '@/app/types/brandContent';
import { isMobile } from 'react-device-detect';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Brands() {
    return (
        <section className="relative lg:max-w-[1920px] mx-auto">

            <div className="container">

                <div className="lg:w-7/12 lg:pt-14">

                    <h2 className="text-white font-bold font-nexa text-24 lg:text-40 uppercase mb-5 lg:mb-[40px] leading-[28px] lg:leading-[40px]">
                        marcas que confiaram
                        <span className="text-32 lg:text-56 block leading-[32px] lg:leading-[52px]">
                            no nosso trabalho
                        </span>
                    </h2>

                    <p className="text-white lg:text-18 lg:leading-[24px] lg:w-[80%]">
                        <strong>Junte-se às grandes empresas que já trabalharam conosco</strong> <br /> Confira algumas das marcas que escolheram ter grandes resultados através dos nossos serviços
                    </p>

                </div>
            </div>

            <div className="absolute lg:right-0 top-[280px] lg:top-0 w-full lg:w-[640px] 3xl:w-[840px]">

                <div className="hidden lg:block absolute w-[300px] top-0 h-full z-10 lg:bg-gradient-to-r lg:from-black lg:via-black/50 lg:to-transparent" />

                {
                    firstBrandCarouselContent &&
                    <Swiper
                        spaceBetween={40}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        loop
                        allowTouchMove={false}
                        slidesPerView={isMobile ? 1 : 3}
                        centeredSlides
                        modules={[Autoplay]}
                    >
                        {
                            firstBrandCarouselContent.map((item: BrandContent, idx: number) =>
                                <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl relative" key={idx}>
                                    <img src={item.src} alt={item.alt} width={item.width} height={item.height} 
                                    className='absolute left-0 right-0 m-auto top-[50%] translate-y-[-50%]' />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                }

                {/* reverse */}
                
                {
                    secondBrandCarouselContent &&
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
                        slidesPerView={isMobile ? 1 : 3}
                        centeredSlides
                        modules={[Autoplay]}
                    >
                        {
                            secondBrandCarouselContent.map((item: BrandContent, idx: number) =>
                                <SwiperSlide className="bg-white min-w-[250px] min-h-[150px] rounded-2xl relative" key={idx}>
                                      <img src={item.src} alt={item.alt} width={item.width} height={item.height} 
                                    className='absolute left-0 right-0 m-auto top-[50%] translate-y-[-50%]' />
                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                }
            </div>


        </section >
    )
}