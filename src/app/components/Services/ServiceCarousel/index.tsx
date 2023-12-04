import { ImageBasic } from "@/app/types/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";


interface ServiceCarouselProps {
    scroll?: Boolean;
    carouselSlides: Array<ImageBasic>
}

export default function ServiceCarousel(props: ServiceCarouselProps) {

    return (
        <>
            <Swiper
                spaceBetween={0}
                grabCursor
                slidesPerView={1}
                autoHeight
            >
                {
                    props.carouselSlides.map((slide: ImageBasic, idx: number) =>
                        <SwiperSlide key={idx}>
                            <div className={`flex items-center justify-center ${props.scroll ? '' : 'h-[400px] lg:h-[600px]'}`}>
                                <img className={`${props.scroll ? '' : 'absoute h-full w-full object-contain'}`} loading="lazy" src={slide.src} alt={slide.alt} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

