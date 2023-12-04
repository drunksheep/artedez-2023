import { cardsContent } from "@/app/content/plans";
import { BrowserView, MobileView } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import MobileHelper from "../MobileHelper";
import PlanCard, { PlanCardProps } from "./PlanCard";

export default function Plans() {
    return (
        <section className="bg-black pt-[70px] pb-[30px] lg:py-[130px]" id="plans">
            <div className="container">

                <h2 className="text-white font-bold font-nexa  text-24 leading-[24px] lg:text-40 lg:leading-[40px] uppercase mb-[40px]">
                    conheça
                    <span className="text-56 block leading-[52px]">
                        nossos planos
                    </span>
                </h2>

                <p className="text-white text-14 lg:text-18 mb-10">
                    <b>Simples e transparente:</b> nosso sistema de <b>Cotas Criativas</b> coloca o controle nas suas mãos Cada cota criativa equivale a uma arte, exceto para identidades visuais e layouts de sites, que consomem 4 cotas
                </p>

                <BrowserView>
                    <div className="lg:grid lg:grid-cols-3 gap-x-[40px] mb-20">
                        {
                            cardsContent.map((item: PlanCardProps, idx: number) =>
                                <PlanCard
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                    limit={item.limit}
                                    extraProd={item.extraProd || ''}
                                    value={item.value}
                                    ctaString={item.ctaString}
                                    doubleLimit={item.doubleLimit}
                                    key={idx} />
                            )
                        }
                    </div>
                </BrowserView>

                <MobileView>

                    <Swiper
                        slidesPerView={1}
                        centeredSlides
                        autoHeight
                        className="mb-10"
                    >
                        {
                            cardsContent.map((item: PlanCardProps, idx: number) =>
                                <SwiperSlide key={idx}>
                                    <PlanCard
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        description={item.description}
                                        limit={item.limit}
                                        extraProd={item.extraProd || ''}
                                        value={item.value}
                                        ctaString={item.ctaString}
                                        doubleLimit={item.doubleLimit}
                                    />
                                </SwiperSlide>
                            )

                        }

                    </Swiper>

                    <div className="mb-10">
                        <MobileHelper />
                    </div>

                </MobileView>

                <p className="text-14 lg:text-18 text-white leading-[20px] lg:leading-[24px]">
                    <b>Cotas adicionais*:</b> Nos planos mensais, cada cota adicional solicitada terá o valor de R$ 89,00. Já nos planos semestrais, o valor da cota adicional será de R$ 69,90. <span className="text-gray-400">*o plano arte dez possui cotas ilimitadas.</span>
                </p>

            </div>
        </section>
    )
}