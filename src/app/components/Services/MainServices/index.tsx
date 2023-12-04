import { mainServices, social, visualIdentities, webDesign } from "@/app/content/services";
import { CarouselMap } from "@/app/types/carouselMap";
import { ImageBasic } from "@/app/types/image";
import { ServiceItem } from "@/app/types/serviceItem";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function MainServices() {
 
    const [slideCategory, setSlidecategory] = useState();
    const [carouselSlides, setCarouselSlides] = useState<Array<ImageBasic>>([]);


    function handleSlideCategory(e: any) {
        let cat = e.target.dataset.cat;
        setSlidecategory(cat);
        handleCarouselSlides(cat);
    }

   
    function handleCarouselSlides(category: string) {
        const carouselMap : CarouselMap = {
            webDesign: webDesign,
            branding: visualIdentities,
            social: social,
        };
    
        setCarouselSlides(carouselMap[category] || webDesign);
    }
    

    return (
        <Dialog.Root>

            <div className="grid grid-cols-4 gap-x-[40px] mb-10">
                {
                    mainServices &&
                    mainServices.map((item: ServiceItem, idx: number) =>
                        <div className="min-h-[490px] border-b-2 flex flex-cloumn items-end px-5 py-5 rounded-[15px] relative overflow-hidden border-4 border-transparent hover:border-white transition-all ease-in-out duration-300 hover:shadow-2xl cursor-pointer" key={idx}>
                            <Dialog.Trigger className="trigger" asChild>
                                <div>
                                    <img className="absolute top-0 left-0 w-full h-full" src={item.bg || ''} alt={item.title || ''} width={290} height={500} data-cat={item.category || 'webDesign'} onClick={e => handleSlideCategory(e)} />
                                    <h2 className="text-white leading-[48px] relative z-10 pointer-events-none">
                                        <span className="tracking-[2.2px]">
                                            {item.title}
                                        </span>
                                        <br />
                                        <strong className="text-36 leading-[30px]">
                                            {item.subtitle}
                                        </strong>
                                    </h2>
                                </div>
                            </Dialog.Trigger>
                        </div>
                    )
                }


                <Dialog.Portal>
                    <Dialog.Overlay className="bg-purple-400/75 fixed inset-0 z-10" />
                    <Dialog.Content className="fixed top-[50%] left-[50%] h-[70vh] w-[80vw] max-h-[760px] max-w-[1300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] z-20 focus:outline-none">
                        <div className="site-container w-full max-h-[100%] border-2 border-white overflow-y-scroll">

                            {
                                carouselSlides &&
                                <Swiper
                                    spaceBetween={0}
                                    grabCursor
                                    autoHeight
                                >
                                    {
                                        carouselSlides.map((slide: ImageBasic, idx: number) =>
                                            <SwiperSlide key={idx}>
                                                <img loading="lazy" src={slide.src} alt={slide.alt} />
                                            </SwiperSlide>
                                        )
                                    }

                                </Swiper>

                            }
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>

            </div>


        </Dialog.Root>
    )
}