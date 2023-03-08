import 'animate.css';
import { Card } from './Card';
import { IBusiness } from '../../../types/';
import { motion } from 'framer-motion';
import { NextPeriodArrow, NextPeriodButton } from './NextPeriod';
import Image from 'next/image';
import Link from 'next/link'
import List from '../Lists/List';
import React, {useState, useCallback} from 'react'

interface ICardExperience {
    business: IBusiness;
}


export const CardExperience = ({business}:ICardExperience) => {
    const [period, setPeriod] = useState<number>(0);

    const handleIncrementPeriod = useCallback(() =>{
           setPeriod((prev) => prev+1 === business.periods.length?0:prev+1);
        },
      [],
    )
    
    return (
        <Card cardStyles={'h-full md:h-[22rem]  pt-0 !border-0 '} childrenCardStyle={'!px-0 dark:bg-black  '}>
                <Link href={business.url}>
                    <a 
                        target={'_blank'}  
                        aria-label={`Enlace que redirecciona a la web de ${business.name}`}
                        className='relative w-14 h-14 hover:scale-150 duration-300 !transition-all'>
                        <Image
                            src={business.images[0].url}
                            onError={() => business.images[1]}
                            alt={business.images[0].alt}
                            layout={'fill'}
                            objectFit={'cover'}
                            className='rounded-full'
                    
                        />
                    </a> 
                </Link>

            <div className='px-1 pt-2 flex-grow'>
                <h3 className='font-semibold text-2xl text-black dark:text-white h-9  block'>
                    <Link href={business.url}   passHref>
                        <a target={'_blank'} aria-label={`Enlace que redirecciona a la web de ${business.name}`}> {business.name}</a>
                    </Link>    
                </h3>
                <motion.div 
                    initial={{ x: -50}}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                        <h4 className='text-xl font-normal text-black dark:text-white'>
                            {business.periods[period].role} </h4>
                        <span className='text-gray-600 dark:text-gray-200 underline'> 
                            {business.periods[period].datePeriod} 
                        </span>
                    
                
                        <List list={business.periods[period].tecnologies} listStyles='pt-4 flex flex-row flex-wrap gap-2 justify-start text-black dark:text-gray-300'/>
                    </motion.div>
            </div>

            {
                business.periods.length > 1 && (
                   <section className='self-start mt-4 md:mt-0 mb-4 sm:self-end md:mb-0 flex flex-row gap-4 relative'>
                    <NextPeriodButton handleIncrementPeriod={handleIncrementPeriod} >
                        <span className='text-black dark:text-white'>{period === business.periods.length-1?'Rol Actual':'Rol Anterior'}</span>
                        <NextPeriodArrow />
                     </NextPeriodButton>
                   </section>
                )
            }
    </Card>
        
    )
}
