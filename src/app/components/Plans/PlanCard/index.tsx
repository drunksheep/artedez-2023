
export interface PlanCardProps {
    title: string;
    subtitle: string;
    description: string;
    limit?: string;
    extraProd?: string;
    value?: string;
    ctaString: string;
    doubleLimit?: boolean;
    limit2?: string;
    usesLimit2?: boolean;
}

export default function PlanCard(props: PlanCardProps) {
    return (
        <div className="border-4 border-white min-h-[578px] lg:min-h-full rounded-[52px] bg-transparent pt-12 pb-5 px-5 lg:py-6 lg:px-10 transition-all duration-400 ease-in-out hover:bg-white group flex fex-col flex-wrap content-between">
            {
                props.title &&
                <h3 className="text-white group group-hover:text-black transition-all duration-400 ease-in-out font-nexa font-bold w-full mb-6 text-38 leading-[38px] uppercase" dangerouslySetInnerHTML={{ __html: props.title }} />
            }
            <div className="mb-5">
                {
                    props.description &&
                    <p className="text-white text-18 leading-[22px] group group-hover:text-black transition-all duration-400 ease-in-out lg:min-h-[330px]" 
                    dangerouslySetInnerHTML={{__html: props.description}} />
                }
            </div>
            <div className="align-self-end mt-5 lg:mt-8 w-full">
                {
                    props.value &&
                    <p className="text-14 lg:text-18 text-white group group-hover:text-black transition-all duration-400 ease-in-out leading-[40px] mb-10">
                        <b>Valor Mensal:</b> <br />
                        <span className="text-32 lg:text-50 font-bold font-nexa">
                            {props.value}
                        </span>
                    </p>
                }
                {
                    props.ctaString &&
                    <a href={props.ctaString}
                        className="bg-pink-400 text-white border-4 border-white rounded-full min-h-[60px] text-20 text-center gap-x-3 justify-center flex flex-row items-center px-4 duration-400 ease-in-out transition-all hover:bg-pink-500 font-bold w-full mx-auto" target="_BLANK" rel="noopener noreferrer">
                        Preciso desse kit!
                    </a>
                }
            </div>
        </div>
    )
}