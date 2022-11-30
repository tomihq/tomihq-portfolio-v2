import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import styled from "styled-components";
import { keyframes } from "styled-components";
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { AvatarPicture } from '../components/ui/AvatarPicture';
const Home: NextPage = () => {


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

  return (
    <div className='flex flex-col justify-center px-8'>
      <Layout
        title={'Home Page'}
        pageDescription={'Tomi Hernández Portfolio Home Page'}
      >
        <section className='flex flex-col-reverse border-gray-100 border-b-2  justify-between md:flex-row mb-6 dark:border-stone-600'>
          <div className='flex flex-col pr-8 md:w-9/12'>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Tomás Hernández</h1>
            <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Software Engineer at <b className='text-black dark:text-white'>Gransliving</b></h2>
            <span className='text-gray-600 dark:text-gray-400 mb-4 px-1'>Amo hacer aplicaciones
              <b className="text-black dark:text-white"> escalables</b>,
              <b className="text-black dark:text-white"> <span>útiles</span> </b>  y
              <b className="text-black dark:text-white"> eficientes</b> para los usuarios, que les permita hacer más en  menos tiempo. <br />
              
              <br />
              <span>
                 <b className='text-black dark:text-white mb-4'>Reminder</b>: Siempre se encuentra algo para <b className='dark:text-white text-black'>optimizar </b>no tengas miedo a <b><span className=' text-black dark:text-white '>refactorizar</span></b> y <b className='dark:text-white text-black '> testeá tu aplicación</b> en todos los dispositivos, <b className='text-black dark:text-white'>¡tu local no es un cliente!</b>
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

        <section className='mb-4'>
           <h3 className='font-bold text-2xl text-black dark:text-white pr-8 mb-3 block'>Contacto</h3>
            <div className='flex flex-column'>
                <div>
                  <span>
                    ¿Quieres contactarme por trabajo y/o discutir algunas ideas que tengas en mente?
                    Sentite libre de contactarme vía
                      <AnimatedGradientText> <b>
                        <Link href="mailto:hernandeztomas584@gmail.com">
                          <a>  email</a>
                        </Link>
                        </b>
                      </AnimatedGradientText>.
                    <br />

                    También podés encontrarme en 
                    <AnimatedGradientText> 
                        <b>
                          <Link href="https://www.linkedin.com/in/tomihq/">
                            <a> LinkedIn</a>
                          </Link>
                        </b>
                    </AnimatedGradientText>.
                  </span>

                </div>
            </div>
            <Button
                  buttonClasses='border border-gray-700 bg-black text-white  rounded-md mt-4 px-4 py-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline dark:bg-white dark:border-neutral-400 dark:hover:bg-gray-800
                  text-black dark:text-black'
                  
                >
            
                 <Link href="files/cv.pdf" passHref>
                      <a target="_blank" download="Tomás Hernández CV">      Download CV   </a>
                    </Link>
            </Button>

        </section>

      </Layout>

    </div>
  )
}

export default Home
