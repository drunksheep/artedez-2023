import { ServiceItem } from "..";


export default function ServiceCardWide( props: ServiceItem ) {
    return (
        <div className="min-h-[85px] border-b-2 border-white flex px-5 py-5 bg-red-400 rounded-lg">
            <h2 className="text-white leading-[48px] flex flex-row flex-nowrap gap-x-1 items-center content-center justify-center">
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