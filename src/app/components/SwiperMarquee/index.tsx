import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


interface SwiperMarqueeProps {
    items: Array<string>
}

export default function SwiperMarquee(props: SwiperMarqueeProps) {


    return (
        <Swiper
            className="bg-yellow-400 rotate-[-2deg]"
            spaceBetween={0}
            speed={2000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loop
            allowTouchMove={false}
            slidesPerView={6}
            centeredSlides
            modules={[Autoplay]}
        >

            {
                props.items &&
                props.items.map((item: string, idx: number) =>
                    <SwiperSlide className="" key={idx}>
                        <div className='inline-flex text-black text-28 font-bold py-2 uppercase justify-center'>
                            {item}
                        </div>
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}