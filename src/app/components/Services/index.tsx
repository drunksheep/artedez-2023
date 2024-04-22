import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BrowserView } from 'react-device-detect';
import TitleHeadline from "../TitleHeadline";
import MainServices from "./MainServices";


export default function Services() {

    return (
        <section className="pt-[230px] lg:pt-[100px] relative pb-[50px] lg:pb-[130px]">

            <div className="container relative z-10">

                <div className="lg:flex flex-row justify-between items-center mb-10 lg:mb-0">

                    <TitleHeadline title="nossos serviços ajudam" subtitle="seu negócio a crescer" />

                    <BrowserView>
                        <p className="mb-[40px] lg:mb-0 text-14 text-white flex flex-row gap-x-2 items-center">
                            Clique para conferir os projetos
                            <img src="/images/mouse.svg" width={20} height={20} alt="" />
                        </p>
                    </BrowserView>

                </div>

                <MainServices />

                {/* <TitleHeadline title="conheça" subtitle="nossos diferenciais" /> */}

                {/* <BrowserView>
                    {
                        SellingCards &&
                        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[60px]">
                            {
                                SellingCards.map((item: SellingCardProps, idx: number) =>
                                    <SellingCard
                                        image={item.image || ''}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        description={item.description}
                                        width={item.width}
                                        height={item.height}
                                        positioning={item.positioning}
                                        key={idx} />
                                )
                            }
                        </div>
                    }


                </BrowserView>

                <MobileView>
                    {
                        SellingCards &&
                        <Swiper
                            slidesPerView={1}
                            centeredSlides
                            autoHeight
                        >
                            {
                                SellingCards.map((item: SellingCardProps, idx: number) =>
                                    <SwiperSlide
                                        className="pt-5 px-4"
                                        key={idx}>
                                        <SellingCard
                                            image={item.image || ''}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            description={item.description}
                                            width={item.width}
                                            height={item.height}
                                            positioning={item.positioning}
                                            key={idx} />
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>
                    }
                    <div className="mt-5">
                        <MobileHelper />
                    </div>

                </MobileView> */}

            </div>

            <div className="bg-gradient-to-t from-purple-400 to-transparent h-full w-full absolute top-0 left-0" />

            <Link className="bg-pink-400 rounded-full font-bold w-full border-[4px] border-white text-18 lg:text-24 py-3 flex flex-row flex-nowrap justify-center align-center items-center gap-x-2 transition-all ease-in-out duration-300 hover:bg-white hover:border-pink-400 hover:text-pink-400 absolute bottom-[-35px] left-0 right-0 m-auto max-w-[320px] lg:max-w-[430px]" href="#plans" title="Conheça os planos">
                <span>
                    Quero solicitar um orçamento
                </span>
                <FontAwesomeIcon className="max-w-[20px]" size="2xs" icon={faArrowDown} />
            </Link>

        </section>
    )
}