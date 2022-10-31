import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Link from 'next/link';
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
            <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>Amo hacer aplicaciones
              <b className="bg-pink-300 text-black ml-1"> escalables </b>,
              <b className="bg-green-200 text-black ml-1"> <span> útiles </span> </b>  y
              <b className="bg-purple-300 dark:bg-purple-400 text-black mx-1"> eficientes </b> para los usuarios, que les permita hacer más en  menos tiempo. <br />
              <br />
              <span className="bg-yellow-300 text-black px-1">
                Actualmente trabajo como <b>desarrollador</b> de <b>backend</b> aunque en mis tiempos libres desarrollo aplicaciones web completas, desde el lado backend y frontend.
              </span>

              <br />
              <br />
              <b className='text-black dark:text-white'>Reminder</b>: Siempre se encuentra algo para <b className='bg-lime-300 px-1 mr-1 text-black'>optimizar</b>no tengas miedo a <b><span className='bg-blue-300 text-black px-1'>refactorizar</span></b> y <b className='bg-orange-300 text-black px-1'> testeá tu aplicación</b> en todos los dispositivos, ¡tu local no es un cliente!


            </span>

            <section className='mb-4'>
              <div className='flex flex-row'>
                <button
                  type="button"
                  className="border border-black bg-black text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline dark:bg-white"
                >
                  <span className='dark:text-black'>
                    <Link href="https://www.linkedin.com/in/tomihq/" prefetch={true}>
                      <a target={'_blank'}> View LinkedIn</a>
                    </Link>
                  </span>
                </button>

                <button
                  type="button"
                  className="border border-gray-700 bg-white text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline dark:bg-black dark:border-neutral-400 dark:hover:bg-gray-800"
                >
                   <span className='dark:text-white text-black'>
                    <Link href="  https://github.com/tomihq" prefetch={true}>
                      <a target={'_blank'}> View GitHub</a>
                    </Link>
                  </span>
                </button>
              </div>
            </section>

          </div>
          <div className='flex flex-col'>
            <picture className='pb-4'>
              <source srcSet="https://pbs.twimg.com/profile_images/1575292182801653761/7ARe6ZOJ_400x400.jpg" type="image/jpg" />
              <img className='filter grayscale rounded-full max-h-32' src="https://pbs.twimg.com/profile_images/1575292182801653761/7ARe6ZOJ_400x400.jpg" alt="me-picture" />
            </picture>
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
        </section>

      </Layout>

    </div>
  )
}

export default Home
