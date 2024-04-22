import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import TitleHeadline from "../TitleHeadline";

export default function HeroText() {
    return (

        <div className="lg:w-[490px]">

            <TitleHeadline title="liberte-se" subtitle="das preocupações com design" htag  />

            <p className="text-white text-14 lg:text-18 lg:leading-[22px] mb-[20px] lg:mb-[30px]">
                Entregamos não apenas projetos, <strong>mas resultados que impulsionam o seu negócio e trazem lucro real</strong>
            </p>
            <p className="text-white text-14 lg:text-18 lg:leading-[22px] mb-[20px] lg:mb-[50px]">
                <strong>Com preços acessíveis, garantimos qualidade no menor prazo possível.</strong> Nós cuidamos da sua presença visual enquanto você se concentra na expansão do seu negócio
            </p>

            <Link className="bg-pink-400 rounded-full font-bold w-full border-2 lg:border-[4px] border-white text-18 lg:text-24 py-3 flex flex-row flex-nowrap justify-center align-center items-center gap-x-2 mb-[30px] transition-all ease-in-out duration-300 hover:bg-white hover:border-pink-400 hover:text-pink-400" href="#plans" title="Conheça os planos">
                <span>
                    Quero conhecer os produtos!
                </span>
                <FontAwesomeIcon icon={faArrowDown} />
            </Link>

            <div className="lg:flex lg:flex-row gap-x-2 flex-nowrap justify-between align-center items-center">
                <img src="/images/clientes.png" alt="" width={209} height={52} />
                <p className="mt-2 lg:mt-0 text-white font-bold text-20 lg:text-22">+100 Clientes atendidos</p>
            </div>
            
        </div>

    )
}