import { NextPage } from "next"
import { Layout } from "../components/layouts"

const Proyects: NextPage = () => {
  return (
    <div className='flex flex-col justify-center px-8'>
        <Layout 
        title={'Proyects Page'}
        pageDescription={'Tomi Hernández Portfolio Proyects Page'}
        >
            <section className='flex flex-col-reverse md:flex-row'>
                <div className='flex flex-col pr-8 md:w-9/12'>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Projects</h1>
                    <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Welcome, outsider! <b className='text-black'>hope you enjoy ✨ </b></h2>
                    <span className='ml-1 text-gray-600 dark:text-gray-400 mb-16'>Never stop learning and keep going, even if sometimes you want to give up.
                    </span>       
                </div>
                <div className='flex flex-col w-3/12'>
                    <picture className='pb-4'>
                        <source srcSet="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" type="image/jpg"/>
                        <img className='filter grayscale rounded-full max-h-32' src="https://leerob.io/_next/image?url=%2Favatar.jpg&w=384&q=75" alt="me-picture"/>
                    </picture>
                </div>
        </section>

   </Layout>
  
  </div>
  )
}


export default Proyects