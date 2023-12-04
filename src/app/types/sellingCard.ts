import { ServiceItem } from "./serviceItem";

export interface SellingCardProps extends ServiceItem {
    image?: string;
    description: string,
    positioning?: string;
    width: number;
    height: number;
}
