import Link from 'next/link';
import React, {useState} from 'react'
import { IProject } from '../../interfaces';
import { Button } from './Button';
import { CardGradient } from './CardGradient';

export const ProjectCard = (data: IProject  ) => {

  const {slug, title, description, tecnologies, link, status, lastUpdate} = data;
  const [cardHovered, setCardHovered] = useState<string>();
  

  const onHoverCard = (slug: string) =>{

    if(cardHovered){
        setCardHovered("");
        return;
    }
    setCardHovered(slug)

  }

  return (
    <div className="md:w-72 text-black dark:text-white cursor-pointer flex flex-col justify-between" 
                key={slug} 
                onMouseEnter={() => onHoverCard(slug)}
                onClick={() => onHoverCard(slug)}
              
                onMouseLeave={() => setCardHovered("")}
                >
                  <CardGradient>
                  <h3 className="text-black dark:text-white text-3xl font-semibold mb-3">{title}</h3>
                    <div className={`front-card ${slug==cardHovered?'hidden':''} text-left`}>
                          <p className="text-black dark:text-white">{description}</p>
                    </div>
                    <div className={`back-card ${slug==cardHovered?'':'hidden'} flex flex-col mt-1`} >
                          <div className="text-black dark:text-white">
                            <label htmlFor={`tecnologies-${slug}`} ><p className='font-semibold'> Tecnologías utilizadas:</p></label>
                            <p id="tecnologies">{tecnologies}</p>
                           
                          </div>
                          <div className='text-black dark:text-white mt-1'>
                            <label htmlFor="status"><p className='font-semibold inline-block'> Estado: </p></label>
                            <p className='inline'> {status}</p>
                          </div>
                          <div>
                            <label htmlFor="status"><p className='font-semibold inline-block mt-1'> Última actualización: </p></label>
                            <p className='inline'> {lastUpdate}</p>
                          </div>
                          <Button  buttonClasses='mt-4 border border-gray-700 bg-black text-white  rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline dark:bg-white dark:border-neutral-400 dark:hover:bg-stone-800 dark:hover:text-white
                          text-black dark:text-black'>
                            ¡Miralo acá!
                            <Link href={link} passHref>
                              <a target="_blank"></a>
                            </Link>
                          </Button>
                    </div>
                </CardGradient>
    </div>
  )
}
