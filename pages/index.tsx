import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
const Home: NextPage = () => {
  return (
   <div className='flex flex-col justify-center px-8'>
     <Layout 
      title={'Home Page'}
      pageDescription={'Tomi Hernández Portfolio Home Page'}
    >
      <section className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col pr-8 md:w-9/12'>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Tomás Hernández</h1>
          <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Software Engineer at <b className='text-black'>Gransliving</b></h2>
          <span className='ml-1 text-gray-600 dark:text-gray-400 mb-16'>Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.</span>       
        </div>
        <div className='flex flex-col w-3/12'>
          <picture className='pb-4'>
            <source srcSet="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" type="image/jpg"/>
            <img className='filter grayscale rounded-full max-h-32' src="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" alt="me-picture"/>
          </picture>
        </div>
      </section>

      <section className='flex flex-col gap-6'>
       <h3 className='font-bold text-2xl text-black'>Some of my bored proyects</h3>
        <div className='flex flex-col md:flex-row gap-6'>
          
          <div className='w-4/12 bg-white rounded-md border-4 border-indigo-200 flex flex-row px-4 
          text-black cursor-pointer pt-2'>
            <div className='w-9/12'>
              <h4 className='font-bold'>TwitterClone</h4>
              <span className='pb-1 underline'>¡My first APP!</span>
              <ol>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ol>
            </div>
            <div className='w-3/12'>
              <picture className='pb-4'>
               <source srcSet="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" type="image/jpg"/>
               <img className='filter grayscale rounded-full max-h-32' src="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" alt="me-picture"/>
              </picture>
            </div>
          </div>

          <div className='w-4/12 bg-white rounded-md border-4 border-indigo-200 flex flex-row px-4 
          text-black cursor-pointer pt-2'>
            <div className='w-9/12 pb-3'>
              <h4 className='font-bold'>TwitterClone</h4>
              <span className='pb-1 underline'>¡My first APP!</span>
              <ol>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ol>
            </div>
            <div className='w-3/12'>
              <picture className='pb-4'>
               <source srcSet="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" type="image/jpg"/>
               <img className='filter grayscale rounded-full max-h-32' src="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" alt="me-picture"/>
              </picture>
            </div>
          </div>

          <div className='w-4/12 bg-white rounded-md border-4 border-indigo-200 flex flex-row px-4 
          text-black cursor-pointer pt-2'>
            <div className='w-9/12'>
              <h4 className='font-bold'>TwitterClone</h4>
              <span className='pb-1 underline'>¡My first APP!</span>
              <ol>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ol>
            </div>
            <div className='w-3/12'>
              <picture className='pb-4'>
               <source srcSet="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" type="image/jpg"/>
               <img className='filter grayscale rounded-full max-h-32' src="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" alt="me-picture"/>
              </picture>
            </div>
          </div>

          
        </div>
      </section>

    </Layout>
   
   </div>
  )
}

export default Home
