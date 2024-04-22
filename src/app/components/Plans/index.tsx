import { cardsContent } from "@/app/content/plans";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserView, MobileView } from 'react-device-detect';
import PlanCard, { PlanCardProps } from "./PlanCard";

export default function Plans() {
    return (
        <section className="bg-black pt-[70px] pb-[30px] lg:py-[130px]" id="plans">
            <div className="container">

                <h2 className="text-white font-bold font-nexa  text-24 leading-[24px] lg:text-40 lg:leading-[40px] uppercase mb-[40px]">
                    conheça
                    <span className="text-56 block leading-[52px]">
                        nossos produtos
                    </span>
                </h2>

                <p className="text-white text-14 lg:text-18 mb-10">
                    Para receber uma proposta, clique nos botões abaixo e entre em contato através do nosso Whatsapp. <br />
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
                                    // value={item.value}
                                    ctaString={item.ctaString}
                                    doubleLimit={item.doubleLimit}
                                    limit2={item.limit2}
                                    usesLimit2={item.usesLimit2}
                                    key={idx} />
                            )
                        }
                    </div>
                </BrowserView>

                <MobileView>
                    {
                        cardsContent.map((item: PlanCardProps, idx: number) =>
                            <div className="mb-10" key={idx}>
                                <PlanCard

                                    title={item.title}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                    limit={item.limit}
                                    extraProd={item.extraProd || ''}
                                    // value={item.value}
                                    ctaString={item.ctaString}
                                    doubleLimit={item.doubleLimit}
                                    limit2={item.limit2}
                                    usesLimit2={item.usesLimit2}
                                />
                            </div>
                        )

                    }

                </MobileView>

                <p className="text-14 lg:text-18 text-white leading-[20px] lg:leading-[24px]">
                    Para orçamentos de demais serviços ou planos personalizados para agências ou empresas, entre em contato via  <a target="_BLANK" href="https://api.whatsapp.com/send?phone=5511964637406&text=Ol%C3%A1,%20gostaria%20de%20uma%20proposta%20personalizada." className="text-green-400  hover:underline">whatsapp <FontAwesomeIcon icon={faWhatsapp} /> </a>
                </p>

            </div>
        </section>
    )
}