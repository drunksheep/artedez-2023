import { ServiceItem } from "..";


export default function ServiceCardWide(props: ServiceItem) {
    return (
        <div className="min-h-[85px] border-2 border-transparent flex px-5 py-5 rounded-[18px] overflow-hidden relative hover:border-white transition-all duration-300 ease-in-out">
            {
                props.bg &&
                <img className="absolute top-0 left-0 w-full h-full" src={props.bg || ''} alt={props.title || ''} width={290} height={500} />
            }
            <h2 className="text-white leading-[48px] flex flex-row flex-nowrap gap-x-1 items-center content-center justify-center relative z-10">
                <span className="tracking-[2.2px] text-16">
                    {props.title}
                </span>
                <br />
                <strong className="text-36">
                    {props.subtitle}
                </strong>
            </h2>
        </div>
    )
}