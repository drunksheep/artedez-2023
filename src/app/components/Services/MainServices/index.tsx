import { campaigns, mainServices, paid, print, social, visualIdentities, webDesign } from "@/app/content/services";
import { CarouselMap } from "@/app/types/carouselMap";
import { ImageBasic } from "@/app/types/image";
import { ServiceItem } from "@/app/types/serviceItem";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import MobileHelper from "../../MobileHelper";
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
            print: print,
            paid: paid,
            campaigns: campaigns
        };

        setCarouselSlides(carouselMap[category] || webDesign);
    }

    const renderServiceCard = (item: ServiceItem, idx: number) => {
        if (idx < 4) {
            return (
                <Card key={idx} item={item} idx={idx} handleSlideCategory={handleSlideCategory} />
            );
        } else {
            return (
                <WideCard key={idx} item={item} idx={idx} handleSlideCategory={handleSlideCategory} />
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

                <div className="my-10">
                    <MobileHelper />
                </div>
            </MobileView>

            <BrowserView>
                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-y-[30px] lg:gap-x-[40px] lg:mb-10">
                    {mainServices?.map(renderServiceCard)}
                </div>
            </BrowserView>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-purple-400/95 fixed inset-0 z-30" />
                <Dialog.Content className="fixed top-[40%] md:top-[30%] lg:top-[33%] xl:top-[43%] left-[50%] h-[65vh] lg:h-[70vh] w-[90vw] lg:w-[80vw] max-h-[700px] max-w-[1300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] z-40 focus:outline-none">
                    <div className={`site-container w-full max-h-[100%] border-white ${slideCategory === 'webDesign' ? 'overflow-y-scroll' : ''}`}>
                        <ServiceCarousel scroll={slideCategory === 'webDesign' ? true : false} carouselSlides={carouselSlides} />
                    </div>
                    <div className="items-center justify-center mt-7 flex-row">
                        <MobileHelper />
                    </div>
                    {
                        slideCategory === 'webDesign' &&
                        <p className="text-white font-bold text-12 lg:text-20 mt-3 flex items-center justify-center text-center">
                            Deslize verticalmente para ver todo o layout, ou utilize o scroll do mouse
                        </p>
                    }
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    );
}

