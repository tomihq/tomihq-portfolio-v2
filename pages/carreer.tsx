import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { AvatarPicture } from '../components/ui/'
const Carreer: NextPage = () => {
   return(
    <div className='flex flex-col justify-center px-8'>
    <Layout 
    title={'Mi camino como Software Engineer'}
    pageDescription={'Tomi Hernández Experience as a Software Engineer Page'}
    imageFullUrl={'https://res.cloudinary.com/dha5dv59h/image/upload/v1694695526/voDy7FLI_400x400_bnwpsa.webp'}
    canonicalURL={'/carreer'}
    robotsAction={'follow'}
    >
        <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
            <div className='flex flex-col pr-8 md:w-9/12'>
                <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Mi camino como Software Engineer</h1>
                <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Los lenguajes de programación son herramientas. ¿Lo que realmente importa? por solo mencionar los más importantes, la lógica y los algoritmos y estructuras de datos. </h2>
                <span className='ml-1 text-gray-600 dark:text-white mb-8'>Programé en Haskell, C, Visual Basic, Java, PHP y actualmente con mucha frecuencia en TypeScript.
                </span>       
            </div>
            <div className='flex flex-col'>
                <AvatarPicture/>
            </div>
        </section>
    
    <motion.div  
        initial={{ opacity: 0, y: -12 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}>
       <div className='flex flex-col gap-2 justify-between flex-wrap md:flex-row border-gray-100 border-b-2
    dark:border-stone-600 mb-2'>
        <section className='flex flex-col gap-1 mb-7 md:w-1/3'>
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Timeline</h3>
                    <div className='flex flex-col text-gray-800 dark:text-white gap-1'>
                        <span><span className='font-semibold dark:text-white'>Hobby:</span> 2010 using Scratch</span>
                        <span><span className='font-semibold dark:text-white'>Study:</span> 2016 learning Algorithms and Data Estructures at School</span>
                        <span className='font-semibold dark:text-white'>  Professional: </span>
                        <ul className='flex flex-col gap-3 list-decimal px-4 text-sm'>
                            <li className='break-words'>
                                <span className='font-semibold'>Necxus Negocios Informáticos S.A.</span> - Ago. 2021 / Oct. 2022
                            </li>
                            <li className='break-words'>
                                <span className='font-semibold'>GransLiving</span> - Sep. 2022 / Dic. 2023
                            </li>
                            <li className='break-words'>
                                <span className='font-semibold'>Procuración del Tesoro</span> - Ago. 2023 / Actualidad
                            </li>

                        </ul>
                    </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Tecnologies</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-white'>
                    <div className='flex flex-col text-gray-800 dark:text-white gap-1'>
                        <span><span className='font-semibold dark:text-white'>Backend: </span>["JavaScript", "TypeScript", "Haskell", "C", "Visual Basic", "Java", "PHP"]</span>
                        <span><span className='font-semibold dark:text-white'>Frontend: </span>React, Angular, Flutter, jQuery</span>
                        <span><span className='font-semibold dark:text-white'>Frameworks: </span> NestJS, Express, NextJS, Laravel, TailwindCSS, Bootstrap</span>
                      
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/3'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Databases</h3>
                <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-white'>
                    <div className='flex flex-col text-gray-800 dark:text-white gap-1'>
                        <span><span className='font-semibold dark:text-white'>SQL: </span>["MySQL", "PostgreSQL"]</span>
                        <span><span className='font-semibold dark:text-white'>No SQL: </span>MongoDB </span>
                        
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Tools</h3>
                <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-white'>
                    <div className='flex flex-col text-gray-800 dark:text-white gap-1'>
                        <span><span className='font-semibold dark:text-white'>Databases: </span>MySQL Workbench, MongoCompass, Docker</span>
                        <span><span className='font-semibold dark:text-white'>Server: </span>SFTP, FTP, GitHub, GitLab. </span>
                        <span><span className='font-semibold dark:text-white'>Extra: </span>Redis, Multer, Putty</span>
                    </div>
                </div>
            </section>

       </div>
    </motion.div>
       
    </Layout>

    </div>
   )
}

export default Carreer