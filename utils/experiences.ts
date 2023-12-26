import { ALMAS_FORTALECIDAS, GRANSLIVINGPNG, GRANSLIVINGWEBP, NECXUSPNG, NECXUSWEBP, PTNJPG, PTNWEBP } from "../assets";
import { IBusiness } from "../types";

export const EXPERIENCES:IBusiness[] = [
    {
        id: 'almas-fortalecidas',
        name: 'Almas Fortalecidas',
        url: 'https://www.almasfortalecidas.com.ar/',
        periods: [
            
            {
                role: 'Entrepreneur',
                datePeriod: 'May. 2023 - Presente',
                tecnologies: ['Express','NodeJS', 'NextJS', 'NGINX', 'MEMCACHED', 'Redis', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL']
            },
          
        ],
        images: [{url: ALMAS_FORTALECIDAS, alt: 'Logo de Almas Fortalecidas'}, {url: ALMAS_FORTALECIDAS, alt: 'Logo de Almas Fortalecidas'}]
   

    },
    {
        id: 'ptn',
        name: 'Procuración del Tesoro',
        url: 'https://www.argentina.gob.ar/procuraciondeltesoro',
        periods: [
            
            {
                role: 'Tech Lead',
                datePeriod: 'Ago. 2023 - Presente',
                tecnologies: ['Python', 'Django', 'HTML', 'PHP', 'CSS', 'JavaScript', 'ReactJS', 'PostgreSQL']
            },
          
        ],
        images: [{url: PTNWEBP, alt: 'Logo de PTN'}, {url: PTNJPG, alt: 'Logo de PTN'}]
   

    },
    {
        id: 'gransliving',
        name: 'Gransliving',
        url: 'https://www.gransliving.com/',
        periods: [
            
            {
                role: 'Full-Stack Developer',
                datePeriod: 'Nov. 2022 - Dic. 2023',
                tecnologies: ['Express', 'NodeJS', 'TypeScript', 'MongoDB', 'ReactJS', 'NextJS', 'GraphQL', 'GitHub', 'GitLab']
            },
            {
                role: 'Back-End Developer',
                datePeriod: 'Sep. 2022 - Nov. 2022',
                tecnologies: ['Express', 'NodeJS', 'TypeScript', 'MongoDB', 'GitHub']
            },
        ],
        images: [{url: GRANSLIVINGWEBP, alt: 'Logo de Gransliving'}, {url: GRANSLIVINGPNG, alt: 'Logo de Gransliving'}]
   

    },
    {
        id: 'necxus',
        name: 'Necxus',
        url: 'https://www.necxus.com.ar/',
        periods: [
            {
                role: 'Full-Stack Developer',
                datePeriod: 'Ago. 2021 - Sep. 2022',
                tecnologies: ['PHP', 'JavaScript', 'JQuery', 'AJAX', 'MySQL']
            }
        ],
        images: [{url: NECXUSWEBP, alt: 'Logo de Necxus'}, {url: NECXUSPNG, alt: 'Logo de Necxus'}]
   

    },
    
]