import { ServiceItem } from "..";


export default function ServiceCard( props: ServiceItem ) {
    return (
        <div className="min-h-[490px] border-b-2 border-white flex flex-cloumn items-end px-5 py-5 bg-red-400 rounded-lg">
            <h2 className="text-white leading-[48px]">
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