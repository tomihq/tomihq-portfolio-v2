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
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-8 justify-between mb-6'>

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
          <Link href={'/carreer'}>
            <a className='text-center text-xl md:text-2xl font-semibold '  aria-label='Enlace que redirige a página que cuenta acerca de la experiencia de Tomás Hernández'> Ver más <KeyboardDoubleArrowRightIcon/> </a>
          </Link>
        </h3>

    </section>
  )
}

export default ExperienceSection