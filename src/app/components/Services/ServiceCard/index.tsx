import { ServiceItem } from "..";


export default function ServiceCard( props: ServiceItem ) {
    return (
        <div className="min-h-[490px] border-b-2 flex flex-cloumn items-end px-5 py-5 rounded-[15px] relative overflow-hidden border-4 border-transparent hover:border-white transition-all ease-in-out duration-300 hover:shadow-2xl">
            {
                props.bg &&
                <img className="absolute top-0 left-0 w-full h-full" src={props.bg || ''} alt={props.title || ''} width={290} height={500} />
            }
            <h2 className="text-white leading-[48px] relative z-10">
                <span className="tracking-[2.2px]">
                    {props.title}
                </span>
                <br />
                <strong className="text-36 leading-[30px]">
                    {props.subtitle}
                </strong>
            </h2>
        </div>
    )
}