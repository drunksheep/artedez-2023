import { ServiceItem } from "@/app/types/serviceItem";
import * as Dialog from "@radix-ui/react-dialog";

interface RegularCardProps {
    item: ServiceItem;
    idx: number;
    handleSlideCategory: any;
}

export const Card = ({ item, idx, handleSlideCategory } : RegularCardProps) => (
    <div className="row-span-2" key={idx}>
        <div className="min-h-[490px] border-b-2 flex flex-cloumn items-end px-5 py-5 rounded-[15px] relative overflow-hidden border-4 border-transparent hover:border-white transition-all ease-in-out duration-300 hover:shadow-2xl cursor-pointer max-w-[80%] mx-auto lg:max-w-none lg:mx-0" key={idx}>
            <Dialog.Trigger className="trigger" asChild>
                <div>
                    <img className="absolute top-0 left-0 w-full h-full" src={item.bg || ''} alt={item.title || ''} width={290} height={500} data-cat={item.category || 'webDesign'} 
                    onClick={e => handleSlideCategory(e)} />
                    <h2 className="text-white leading-[48px] relative z-10 pointer-events-none">
                        <span className="tracking-[2.2px]">
                            {item.title}
                        </span>
                        <br />
                        <strong className="text-36 leading-[30px]">
                            {item.subtitle}
                        </strong>
                    </h2>
                </div>
            </Dialog.Trigger>
        </div>
    </div>
);