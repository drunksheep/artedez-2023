
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface PlanCardProps {
    title: string;
    subtitle: string;
    description: string;
    limit: string;
    extraProd?: string;
    value: string;
    ctaString: string;
    doubleLimit?: boolean;
}

export default function PlanCard(props: PlanCardProps) {
    return (
        <div className="border-4 border-white rounded-[52px] bg-transparent p-5 lg:py-6 lg:px-10 transition-all duration-400 ease-in-out hover:bg-white group grid grid-cols-1 content-between">
            {
                props.title &&
                <h3 className="text-white group group-hover:text-black transition-all duration-400 ease-in-out font-nexa font-bold w-full mb-3 text-34 uppercase">
                    {props.title}
                </h3>
            }
            <div className="mb-5">
                {
                    props.subtitle &&
                    <h4 className="font-bold text-24 text-white group group-hover:text-black transition-all duration-400 ease-in-out">
                        {props.subtitle}
                    </h4>
                }
                {
                    props.description &&
                    <p className="text-white text-18 group group-hover:text-black transition-all duration-400 ease-in-out">
                        {props.description}
                    </p>
                }
            </div>
            {
                props.limit &&
                <p className="text-18 text-white group group-hover:text-black transition-all duration-400 ease-in-out mb-4">
                    <b>Limite mensal:</b> {props.limit}
                </p>
            }
            {
                props.extraProd &&
                <p className="text-18 text-white group group-hover:text-black transition-all duration-400 ease-in-out mb-4">
                    <b>Identidades visuais e Layouts para Sites ou Landing Pages:</b> <br />
                    {props.extraProd}
                </p>
            }
            {
                props.doubleLimit &&
                <p className="text-18 text-white group group-hover:text-black transition-all duration-400 ease-in-out mb-4">
                    <b>Limite mensal:</b> {props.limit} cotas
                </p>
            }
            <div className="align-self-end mt-8">
                {
                    props.value &&
                    <p className="text-18 text-white group group-hover:text-black transition-all duration-400 ease-in-out leading-[40px] mb-10">
                        <b>Valor Mensal:</b> <br />
                        <span className="text-50 font-bold font-nexa">
                            {props.value}
                        </span>
                    </p>
                }
                {
                    props.ctaString &&
                    <a href={props.ctaString} 
                    className="bg-green-400 text-white border-4 border-white rounded-full min-h-[60px] text-20 text-center gap-x-3 justify-center flex flex-row items-center px-4 duration-400 ease-in-out transition-all hover:bg-green-500 ">
                        Contratar esse plano!
                        <FontAwesomeIcon className="text-white text-32" icon={faWhatsapp} />
                    </a>
                }
            </div>
        </div>
    )
}