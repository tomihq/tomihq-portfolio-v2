import { NextPage } from "next"
import { Layout } from "../components/layouts"
import { AvatarPicture, ProjectCard } from "../components/ui"
import { IProject } from "../interfaces";
import {PROJECTS} from '../utils/projects';

const Projects: NextPage = () => {
  

  return (
    <div className='flex flex-col justify-center px-8'>
        <Layout 
        title={'Proyectos - Actualizado (' + new Date().getFullYear() + ')'}
        pageDescription={'Página de proyectos de la página de tomihq'}
        imageFullUrl={'https://avatars.githubusercontent.com/u/72570859?s=400&u=49352445697d9e9b2cd7ff878022bb65c9bf50d3&v=4'}
        canonicalURL={'/projects'}
        robotsAction={'follow'}
        >
            <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2  dark:border-stone-600'>
                <div className='flex flex-col pr-8 md:w-9/12'>
                    <h1 className="text-3xl md:text-5xl tracking-tight mb-1 font-black text-black dark:text-white pb-1">Proyectos</h1>
                    <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Bienvenida/o a la sección de proyectos <b className='text-black dark:text-white'>✨ </b></h2>
                    <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>Algunos de los proyectos en los que estuve trabajando en este último tiempo. No son muchos, pero me ayudaron a aprender React y NodeJS.
                    Esta página será actualizada a lo largo del tiempo e incluirá proyectos tanto cortos como largos. 
                    </span>       
                </div>
                <div className='flex flex-col'>
                    <AvatarPicture/>
                </div>
        </section>

        <div className='flex flex-col gap-2 justify-between flex-wrap md:flex-row border-gray-100 border-b-2
        dark:border-stone-600 mb-2'>
        <section className='flex flex-col gap-1 mb-7 '>
          <div className="flex flex-col md:flex-row w-full flex-wrap justify-between ">
              {PROJECTS.map((project: IProject) =>{
                return <ProjectCard {...project} key={project.slug}  />
              })}
          </div>
        </section>
       </div>

   </Layout>
  
  </div>
  )
}


export default Projects