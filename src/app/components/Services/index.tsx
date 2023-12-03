import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SellingCard, { SellingCardProps } from "./SellingCard";
import ServiceCard from "./ServiceCard";
import ServiceCardWide from "./ServiceCardWide";

export interface ServiceItem {
    title: string;
    subtitle: string;
    bg?: string;
}

export default function Services() {

    const mainServices: Array<ServiceItem> = [
        {
            title: 'LAYOUTS PARA',
            subtitle: 'SITES E LPS',
            bg: '/images/layouts.png'
        },
        {
            title: 'IDENTIDADES',
            subtitle: 'VISUAIS',
            bg: '/images/identidades-visuais.png',
        },
        {
            title: 'REDES',
            subtitle: 'SOCIAIS',
            bg: '/images/redes-sociais.png',
        },
        {
            title: 'MATERIAIS PARA',
            subtitle: 'IMPRESSÃO',
            bg: '/images/materiais-impressao.png',
        }
    ];

    const secondaryServices: Array<ServiceItem> = [
        {
            title: 'CAMPANHAS',
            subtitle: 'PUBLICITÁRIAS',
            bg: '/images/campanhas.png'
        },
        {
            title: 'MÍDIA',
            subtitle: 'PAGA',
            bg: '/images/midia-paga.png'
        }
    ];

    const SellingCards: Array<SellingCardProps> = [
        {
            title: 'experiência',
            subtitle: 'CONSOLIDADA',
            description: 'Com 20 anos de expertise, colaboramos com gigantes como Porto, Warren e The Town, criando histórias visuais extraordinárias',
            image: '/images/icone-estrela.png'
        },
        {
            title: 'foco total',
            subtitle: 'NO CLIENTE',
            description: 'Aqui cada projeto é uma jornada centrada em você, onde suas necessidades se transformam em designs tangíveis e resultados para seu negócio',
            image: '/images/icone-alvo.png', 
        },
        {
            title: 'inovação que',
            subtitle: 'vende mais',
            description: 'Utilizamos as mais modernas ferramentas de inteligência artificial, como MidJourney e ChatGPT, para auxiliar nossos time criativo, tornando nossos criativos únicos e exclusivos',
            image: '/images/icone-cerebro.png',
        },
    ]

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

                <div className="grid grid-cols-4 gap-x-[40px] mb-10">
                    {
                        mainServices &&
                        mainServices.map((item: ServiceItem, idx: number) =>
                            <ServiceCard bg={item.bg} title={item.title} subtitle={item.subtitle} key={idx} />
                        )
                    }
                </div>

                <div className="grid grid-cols-2 gap-x-[25px]">
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
                            <SellingCard image={item.image || ''} title={item.title} subtitle={item.subtitle} description={item.description} key={idx} />
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