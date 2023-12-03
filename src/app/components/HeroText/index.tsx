import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HeroText() {
    return (

        <div className="w-[490px]">
            <h1 className="text-white font-bold font-nexa text-40 uppercase mb-[40px] leading-[40px]">
                <span className="text-56 block leading-[52px]">
                    liberte-se
                </span>
                das preocupações <br />
                com design
            </h1>
            <p className="text-white text-18 leading-[22px] mb-[30px]">
                Entregamos não apenas projetos, <strong>mas resultados que impulsionam o seu negócio e trazem lucro real</strong>
            </p>
            <p className="text-white text-18 leading-[22px] mb-[50px]">
                <strong>Com preços acessíveis, garantimos qualidade no menor prazo possível.</strong> Nós cuidamos da sua presença visual enquanto você se concentra na expansão do seu negócio
            </p>
            <Link className="bg-pink-400 rounded-full font-bold w-full border-[4px] border-white text-24 py-3 flex flex-row flex-nowrap justify-center align-center items-center gap-x-2 mb-[30px] transition-all ease-in-out duration-300 hover:bg-white hover:border-pink-400 hover:text-pink-400" href="#" title="Conheça os planos">
                <span>
                    Quero conhecer os planos!
                </span>
                <FontAwesomeIcon icon={faArrowDown} />
            </Link>
            <div className="flex flex-row gap-x-2 flex-nowrap justify-between align-center items-center">
                <img src="/images/clientes.png" alt="" width={209} height={52} />
                <p className="text-white font-bold text-22">+100 Clientes atendidos</p>
            </div>
        </div>

    )
}