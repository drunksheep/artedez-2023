import { mainServices, social, visualIdentities, webDesign } from "@/app/content/services";
import { CarouselMap } from "@/app/types/carouselMap";
import { ImageBasic } from "@/app/types/image";
import { ServiceItem } from "@/app/types/serviceItem";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import ServiceCarousel from "../ServiceCarousel";
import WideCard from "../WideCard";


export default function MainServices() {

    const [slideCategory, setSlidecategory] = useState();
    const [carouselSlides, setCarouselSlides] = useState<Array<ImageBasic>>([]);


    function handleSlideCategory(e: any) {
        let cat = e.target.dataset.cat;
        setSlidecategory(cat);
        handleCarouselSlides(cat);
    }


    function handleCarouselSlides(category: string) {
        const carouselMap: CarouselMap = {
            webDesign: webDesign,
            branding: visualIdentities,
            social: social,
        };

        setCarouselSlides(carouselMap[category] || webDesign);
    }

    const renderServiceCard = (item: ServiceItem, idx: number) => {
        if (idx < 4) {
            return (
                <Card item={item} idx={idx} handleSlideCategory={handleSlideCategory} />
            );
        } else {
            return (
                <WideCard item={item} idx={idx} handleSlideCategory={handleSlideCategory} />
            );
        }
    };

    return (
        <Dialog.Root>

            <MobileView>
                <Swiper slidesPerView={1}>
                    {
                        mainServices?.map((item: ServiceItem, idx: number) =>
                            <SwiperSlide key={idx}>
                                <Card item={item} idx={idx} handleSlideCategory={handleSlideCategory} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </MobileView> 

            <BrowserView>
                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-y-[30px] lg:gap-x-[40px] lg:mb-10">
                    {mainServices?.map(renderServiceCard)}
                </div>
            </BrowserView>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-purple-400/75 fixed inset-0 z-10" />
                <Dialog.Content className="fixed top-[50%] left-[50%] h-[70vh] w-[80vw] max-h-[760px] max-w-[1300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] z-20 focus:outline-none">
                    <div className="site-container w-full max-h-[100%] border-2 border-white overflow-y-scroll">
                        <ServiceCarousel carouselSlides={carouselSlides} />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    );
}

