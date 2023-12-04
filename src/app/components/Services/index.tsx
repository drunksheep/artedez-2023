import { SellingCards } from "@/app/content/sellingCard";
import { secondaryServices } from "@/app/content/services";
import { SellingCardProps } from "@/app/types/sellingCard";
import { ServiceItem } from "@/app/types/serviceItem";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import MainServices from "./MainServices";
import SellingCard from "./SellingCard";
import ServiceCardWide from "./ServiceCardWide";


export default function Services() {


    return (
        <section className="pt-[100px] relative pb-[130px]">

            <div className="container relative z-10">

                <div className="flex flex-row justify-between items-center">

                    <h2 className="text-white font-bold font-nexa text-40 uppercase mb-[40px] leading-[40px]">
                        nossos serviços ajudam
                        <span className="text-56 block leading-[52px]">
                            seu negócio a crescer
                        </span>
                    </h2>

                    <p className="text-14 text-white flex flex-row gap-x-2 items-center">
                        Clique para conferir os projetos
                        <img src="/images/mouse.svg" width={20} height={20} alt="" />
                    </p>

                </div>

                <MainServices />

                <div className="grid grid-cols-2 gap-x-[40px]">
                    {
                        secondaryServices &&
                        secondaryServices.map((item: ServiceItem, idx: number) =>
                            <ServiceCardWide bg={item.bg || ''} title={item.title} subtitle={item.subtitle} key={idx} />
                        )
                    }
                </div>

                <h2 className="text-white font-bold font-nexa text-40 uppercase mb-[80px] leading-[40px] mt-[100px]">
                    porque
                    <span className="text-56 block leading-[52px]">
                        fechar com a gente?
                    </span>
                </h2>

                <div className="grid grid-cols-3 gap-x-[60px]">
                    {
                        SellingCards &&
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

            </div>

            <div className="bg-gradient-to-t from-purple-400 to-transparent h-full w-full absolute top-0 left-0" />

            <Link className="bg-pink-400 rounded-full font-bold w-full border-[4px] border-white text-24 py-3 flex flex-row flex-nowrap justify-center align-center items-center gap-x-2 transition-all ease-in-out duration-300 hover:bg-white hover:border-pink-400 hover:text-pink-400 absolute bottom-[-35px] left-0 right-0 m-auto max-w-[430px]" href="#" title="Conheça os planos">
                <span>
                    Quanto preciso investir?
                </span>
                <FontAwesomeIcon className="max-w-[20px]" size="2xs" icon={faArrowDown} />
            </Link>

        </section>
    )
}