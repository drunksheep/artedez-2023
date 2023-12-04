import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isMobile } from 'react-device-detect';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


interface SwiperMarqueeProps {
    items?: Array<string>
}

export default function SwiperMarquee(props: SwiperMarqueeProps) {

    return (
        <Swiper
            className="bg-yellow-400"
            spaceBetween={0}
            speed={2300}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loop
            allowTouchMove={false}
            slidesPerView={isMobile ? 1 : 4}
            centeredSlides
            modules={[Autoplay]}
        >

            {
                props.items &&
                props.items.map((item: string, idx: number) =>
                    <SwiperSlide className="width-[200px] flex text-black text-28 font-bold py-2 px-4 uppercase justify-center items-center relative text-center" key={idx}>
                        <FontAwesomeIcon className='text-white absolute left-0 top-[50%] translate-y-[-50%]' icon={faBolt} />
                        {item}
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}