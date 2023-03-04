import { IProject } from "../interfaces";
export const PROJECTS:IProject[] = [
    {
        "slug": "markdown-blog",
        "title": "Markdown Blog",
        "description": "Priorizando accesibilidad web, el rendimiento, visibilidad y escabilidad utilizando buenas prácticas y contenido generado de forma estática siempre que sea posible.",
        "tecnologies": ["NextJS", "TypeScript", "MDX", "TailwindCSS", "MongoDB"],
        "status": "in-progress",
        "lastUpdate": "28 de Noviembre de 2022",
        "links": [
                    {icon: 'github', ariaLabel: 'Enlace de GitHub al repositorio del Markdown Blog de tomihq', url: "https://github.com/tomihq/tomihq-markdown-blog" }, 
                    {icon: 'link', ariaLabel: 'Enlace de la web del Markdown Blog de tomihq', url: "https://www.tomashernandez.tech/"}
                ]
        },
    {
        "slug": "twitter-app",
        "title": "Twitter App",
        "description": "Mi primer proyecto. Red social parecida a Twitter el cual tiene autenticación, caché, websockets, y lo común en Twitter, crear tweets, eliminarlos, editar tu perfil, recibir notificaciones cuando llega un mensaje o hay evento en un tweet tuyo, etc.",
        "tecnologies": ["NodeJS", "React", "MongoDB", "Vanilla CSS", "Material UI", "SocketIO"],
        "status": "in-progress",
        "lastUpdate": "18 de Septiembre de 2022",
        "links": [
            {
                icon: 'github',  ariaLabel: 'Enlace de GitHub al repositorio del Twitter Clone Basic de tomihq', 
                 url: "https://github.com/tomihq/twitter-clone-basic"
            }
        ]
    },
    {
        "slug": "next-ecommerce",
        "title": "Commerce",
        "description": "E-Commerce",
        "tecnologies": ["NodeJS", "TypeScript", "NextJS", "MongoDB", "TailwindCSS"],
        "status": "in-progress",
        "lastUpdate": "30 de Noviembre de 2022",
        "links": [
            {
                icon: 'github',  
                ariaLabel: 'Enlace de GitHub al repositorio del Teslo Shop de tomihq', 
                url: "https://github.com/tomihq/tomihq-next-js/tree/teslo-shop"
            }
        ]
    },
    {
        "slug": "express-joi-typescript",
        "title": "Template ExpressJS && Joi && TypeScript",
        "description": "Template lista para poder utilizar Express con TypeScript, Joi y Eslint.",
        "tecnologies": ["NodeJS", "TypeScript", "Express", "Joi", "Eslint"],
        "status": "completed",
        "lastUpdate": "2 de Marzo de 2023",
        "links": [
            {
                icon: 'github', 
                url: "https://github.com/tomihq/express-joi-typescript",
                ariaLabel: 'Enlace de GitHub al repositorio del Express Joi y TypeScript de tomihq'
            }
         ]
    },

]