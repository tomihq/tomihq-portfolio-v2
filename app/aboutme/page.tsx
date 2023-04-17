'use client';
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from 'framer-motion';
import AvatarPicture from '../../components/ui/AvatarPicture';
const AboutMe: NextPage = () => {
    const hue = keyframes`
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
   `;
 

   return(
    <div className='flex flex-col justify-center px-8'>
    <Layout 
    title={'Acerca de mí'}
    pageDescription={'Tomi Hernández Portfolio Proyects Page'}
    >
        <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
            <div className='flex flex-col pr-8 md:w-9/12'>
                <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Acerca de mí</h1>
                <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>¡Feliz de tenerte aquí, my friend! <b className='text-black  dark:text-white font-semibold'>Here we go... ✨ </b></h2>
                <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>There is   <b className="text-black dark:text-white font-semibold"> always something to optimize</b>, nothing is perfect.  <b className="text-black dark:text-white font-semibold"> Think big when developing. </b>
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
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Información personal </h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>🔷 21 años</li>
                                <li>📌 Buenos Aires, Argentina </li>
                                <li>😺 Amo los gatos</li>
                                <li>💫 Me gusta pensar y proyectar mis planes a futuro</li>
                                <li>💻 Programo desde los 14 años y comencé con C</li>
                                <li>📝 Me gusta estudiar todo lo relacionado a Ciencias de la Computación.</li>
                                <li>🤔 Proactivo y curioso</li>
                                <li>🔇En constante aprendizaje</li>
                        </ol>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Aprendizaje</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>Soy <b className='text-black dark:text-white font-semibold'>egresado</b>  de una      
                                <b className=' text-black dark:text-white font-semibold'> Escuela Técnica orientada a Computación</b>. </li>
                                <li className='text-black dark:text-white font-semibold'> Estudiante de Ciencias de la Computación en la <strong className='font-semibold'>Universidad de Buenos Aires</strong> (UBA).</li>
                                <li>Leo <b className=' text-black dark:text-white font-semibold'>documentación</b></li>
                                <li>Leo <b className='text-black dark:text-white font-semibold'>libros</b> acerca de desarrollo de Software.</li>
                                <li>Cursos en <b className='text-black dark:text-white font-semibold'>Udemy</b>.</li>
                                <li>Cursos en <b className='text-black dark:text-white font-semibold'>Platzi</b>.</li>
                                
                        </ol>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Hobbies</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>Programar.</li>
                                <li>Tomar café.</li>
                                <li>Escuchar música.</li>
                                <li>Aprender, aprender y aprender.</li>
                        </ol>
                </div>
            </section>
       </div>
    </motion.div>
    </Layout>

    </div>
   )
}

export default AboutMe