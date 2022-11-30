import { NextPage } from "next"
import { useState } from "react";
import { Layout } from "../components/layouts"
import { AvatarPicture, ProjectCard } from "../components/ui"
import { IProject } from "../interfaces";
import {PROJECTS} from '../utils/projects';

const Projects: NextPage = () => {
  

  return (
    <div className='flex flex-col justify-center px-8'>
        <Layout 
        title={'Proyects Page'}
        pageDescription={'Tomi Hernández Portfolio Proyects Page'}
        >
            <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
                <div className='flex flex-col pr-8 md:w-9/12'>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Proyectos</h1>
                    <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Welcome, outsider! <b className='text-black dark:text-white'>hope you enjoy ✨ </b></h2>
                    <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>Some proyects I've working the last time. They are not many, but those helped me learn to React and NodeJS.
                    </span>       
                </div>
                <div className='flex flex-col'>
                    <AvatarPicture/>
                </div>
        </section>

        <div className='flex flex-col gap-2 justify-between flex-wrap md:flex-row border-gray-100 border-b-2
        dark:border-stone-600 mb-2'>
        <section className='flex flex-col gap-1 mb-7 '>
          <div className="flex flex-col md:flex-row flex-wrap px-4 justify-between">
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