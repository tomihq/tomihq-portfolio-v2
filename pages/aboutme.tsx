import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import styled from "styled-components";
import { keyframes } from "styled-components";
import { AvatarPicture } from '../components/ui/';
const AboutMe: NextPage = () => {
    const hue = keyframes`
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
   `;
   const AnimatedGradientText = styled.span`
     color: #4f46e5;
     background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     -webkit-animation: ${hue} 10s infinite linear;
     overflow-wrap: break-word;
     text-align: center;
     text-rendering: optimizelegibility;
     -moz-osx-font-smoothing: grayscale;
   `;

   return(
    <div className='flex flex-col justify-center px-8'>
    <Layout 
    title={'Proyects Page'}
    pageDescription={'Tomi Hernández Portfolio Proyects Page'}
    >
        <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
            <div className='flex flex-col pr-8 md:w-9/12'>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Acerca de mí</h1>
                <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>¡Feliz de tenerte aquí, my friend! <b className='text-black  dark:text-white'>Here we go... ✨ </b></h2>
                <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>There is   <b className="text-black dark:text-white"> always something to optimize</b>, nothing is perfect.  <b className="text-black dark:text-white"> Think big when developing. </b>
                </span>       
            </div>
            <div className='flex flex-col'>
                <AvatarPicture/>
            </div>
        </section>
    
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
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Académico</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>Soy <b className='text-black dark:text-white'>egresado</b>  de una      
                                <b className=' text-black dark:text-white'> Escuela Técnica orientada a Computación</b>. </li>
                                <li>Leyendo <b className=' text-black dark:text-white'>documentación</b> (primordial)</li>
                                <li>Leyendo <b className='text-black dark:text-white'>libros</b> acerca de desarrollo de Software.</li>
                                <li>Cursos en <b className='text-black dark:text-white'>Udemy</b>.</li>
                                <li>Cursos en <b className='text-black dark:text-white'>Platzi</b>.</li>
                                
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

    </Layout>

    </div>
   )
}

export default AboutMe