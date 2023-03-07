import { GRANSLIVINGPNG, GRANSLIVINGWEBP, NECXUSPNG, NECXUSWEBP } from "../assets";
import { IBusiness } from "../types";

export const EXPERIENCES:IBusiness[] = [
    {
        name: 'Necxus',
        url: 'https://www.necxus.com.ar/',
        periods: [
            {
                role: 'Full-Stack Developer',
                datePeriod: 'Ago. 2021 - Sep. 2022',
                tecnologies: ['PHP', 'JavaScript', 'JQuery', 'AJAX', 'MySQL']
            }
        ],
        images: [NECXUSWEBP, NECXUSWEBP]
   

    },
    {
        name: 'Gransliving',
        url: 'https://www.gransliving.com/',
        periods: [
            
            {
                role: 'Full-Stack Developer',
                datePeriod: 'Dic. 2022 - Presente',
                tecnologies: ['Express', 'NodeJS', 'TypeScript', 'MongoDB', 'ReactJS', 'NextJS', 'GraphQL', 'GitHub', 'GitLab']
            },
            {
                role: 'Back-End Developer',
                datePeriod: 'Sep. 2022 - Dic. 2022',
                tecnologies: ['Express', 'NodeJS', 'TypeScript', 'MongoDB', 'GitHub']
            },
        ],
        images: [GRANSLIVINGWEBP, GRANSLIVINGPNG]
   

    }
]