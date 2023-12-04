import { ImageBasic } from "@/app/types/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";


interface ServiceCarouselProps {
    carouselSlides: Array<ImageBasic>
}

export default function ServiceCarousel(props: ServiceCarouselProps) {
    return (
        <Swiper
            spaceBetween={0}
            grabCursor
            autoHeight
        >
            {
                props.carouselSlides.map((slide: ImageBasic, idx: number) =>
                    <SwiperSlide key={idx}>
                        <img loading="lazy" src={slide.src} alt={slide.alt} />
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}

