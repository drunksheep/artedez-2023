import { ServiceItem } from "@/app/types/serviceItem";
import * as Dialog from "@radix-ui/react-dialog";

interface WideCardProps {
    item: ServiceItem;
    idx: number;
    handleSlideCategory: any;
}

export default function WideCard({ item, idx, handleSlideCategory }: WideCardProps) {
    return (
        <div className="col-span-2 row-start-3" key={idx}>
            <Dialog.Trigger className="trigger" asChild>
                <div className="min-h-[85px] border-4 border-transparent flex px-5 py-5 rounded-[18px] overflow-hidden relative hover:border-white transition-all duration-300 ease-in-out">
                    {
                        item.bg &&
                        <img className="absolute top-0 left-0 w-full h-full" src={item.bg || ''} alt={item.title || ''} data-cat={item.category || ''} width={290} height={500} onClick={e => handleSlideCategory(e)} />
                    }
                    <h2 className="text-white leading-[48px] flex flex-row flex-nowrap gap-x-1 items-center content-center justify-center relative z-10">
                        <span className="tracking-[2.2px] text-16">
                            {item.title}
                        </span>
                        <br />
                        <strong className="text-36">
                            {item.subtitle}
                        </strong>
                    </h2>
                </div>
            </Dialog.Trigger>
        </div>
    )
}