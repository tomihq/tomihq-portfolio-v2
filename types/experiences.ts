import { StaticImageData } from "next/image";

export interface IBusiness {
    name: string;
    url: string;
    periods: IBusinessPeriods[]
    images: {
        url: StaticImageData;
        alt: string;
    }[]
} 

export interface IBusinessPeriods {
    role: string;
    datePeriod: string;
    tecnologies: string[];
}