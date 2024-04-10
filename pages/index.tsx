import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { AvatarPicture } from '../components/ui/AvatarPicture';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ExperienceSection = dynamic(() => import("../components/Sections/mainPage/ExperienceSection"));
const ContactSection = dynamic(() => import("../components/Sections/mainPage/ContactSection"));


const Home: NextPage = () => {

  return (
    <div className='flex flex-col justify-center px-8'>
      <Layout
        title={'Portfolio'}
        pageDescription={'Tomi Hernández Portfolio Home Page'}
        imageFullUrl={'https://res.cloudinary.com/dha5dv59h/image/upload/v1694695526/voDy7FLI_400x400_bnwpsa.webp'}
        canonicalURL={'/'}
        robotsAction={'follow'}
      >
        <section className='flex flex-col-reverse border-gray-100 border-b-2  justify-between md:flex-row mb-6 dark:border-stone-600'>
          <div className='flex flex-col pr-8 md:w-9/12'>
            <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Tomás Hernández</h1>
            
            <p className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Software Engineer</p>
             
            <span className='text-gray-600 dark:text-gray-400 mb-4 px-1'>Amo hacer aplicaciones
              <b className="text-black dark:text-white font-semibold"> escalables</b>,
              <b className="text-black dark:text-white font-semibold"> <span>útiles</span> </b>  y
              <b className="text-black dark:text-white font-semibold"> eficientes</b> para los usuarios, que les permita hacer más en  menos tiempo. <br />
              
              <br />
              <span>
                 <b className='text-black dark:text-white mb-4 font-semibold'>Reminder</b>: Siempre se encuentra algo para <b className='dark:text-white text-black font-semibold'>optimizar </b>no tengas miedo a <b><span className=' text-black dark:text-white font-semibold '>refactorizar</span></b> y <b className='dark:text-white text-black font-semibold'> testeá tu aplicación</b> en todos los dispositivos, <b className='text-black dark:text-white font-semibold'>¡tu local no es un cliente!</b>
              </span>
            </span>

            <section className='mb-4'>
              <div className='flex flex-row'>
               
                <Button
                   buttonClasses='border border-black bg-black rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline   dark:bg-white text-white dark:text-black'
                   >
                    <Link href="https://www.linkedin.com/in/tomihq/" prefetch={true}>
                      <a target={'_blank'}> View LinkedIn</a>
                    </Link>
                </Button>

                <Button
                  buttonClasses='border border-gray-700 bg-white  rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline dark:bg-black dark:border-neutral-400 dark:hover:bg-gray-800
                  text-black dark:text-white'
                >
                    <Link href="https://github.com/tomihq" prefetch={true}>
                      <a target={'_blank'}> View GitHub</a>
                    </Link>
                </Button>
                
                
              </div>
            </section>

          </div>
          <div className='flex flex-col'>
            <AvatarPicture/>
          </div>
        </section>

        <motion.div  
            initial={{ opacity: 0, y: -25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}>
            <ExperienceSection/>
            <ContactSection/>
        </motion.div>

      </Layout>

    </div>
  )
}

export default Home
