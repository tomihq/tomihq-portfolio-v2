'use client';
import { CardExperience } from '../../ui';
import { EXPERIENCES } from '../../../utils'
import { IBusiness } from '../../../types/experiences';
import { KeyboardDoubleArrowRightIcon } from '../../../assets';
import Link from 'next/link';
import React from 'react'

const ExperienceSection = () => {

  return (
    <section className=' border-gray-100 border-b-2
    dark:border-stone-600 mb-6 '>
        <h2 className='font-bold text-3xl md:text-4xl text-black dark:text-white pr-8 mb-3 block'>Experiencia</h2>
        <div className='flex flex-col md:flex-row w-full gap-4 md:gap-0 justify-between mb-6'>

            {
                EXPERIENCES.map((experience: IBusiness) =>{
                    return  <CardExperience 
                                    key={experience.name} 
                                    business={experience} 
                             />
                })
            }
           

        </div>
        <h3 className='text-center mb-6  '>
          <Link href={'/carreer'} className='text-center text-xl md:text-2xl font-semibold ' target={'_blank'} aria-label='Enlace que redirige a página que cuenta acerca de la experiencia de Tomás Hernández'>
            Ver más <KeyboardDoubleArrowRightIcon/>
          </Link>
        </h3>

    </section>
  )
}

export default ExperienceSection