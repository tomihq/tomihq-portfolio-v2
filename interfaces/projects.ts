import { ILink } from "./links";

export interface IProject{
    slug: string;
    title: string;
    description: string;
    tecnologies: string[];
    status: string;
    lastUpdate: string;
    links:  ILink[]
}

