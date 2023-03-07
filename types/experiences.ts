import { StaticImageData } from "next/image";

export interface IBusiness {
    name: string;
    url: string;
    periods: IBusinessPeriods[]
    images: StaticImageData[]
} 

export interface IBusinessPeriods {
    role: string;
    datePeriod: string;
    tecnologies: string[];
}