import { NextPage } from "next"
import { Layout } from "../components/layouts"

const Projects: NextPage = () => {
  return (
    <div className='flex flex-col justify-center px-8'>
        <Layout 
        title={'Proyects Page'}
        pageDescription={'Tomi Hernández Portfolio Proyects Page'}
        >
            <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
                <div className='flex flex-col pr-8 md:w-9/12'>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Projects</h1>
                    <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>Welcome, outsider! <b className='text-black dark:text-white'>hope you enjoy ✨ </b></h2>
                    <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>There is always something to optimize, nothing is perfect. Think big when developing.
                    </span>       
                </div>
                <div className='flex flex-col'>
                    <picture className='pb-4'>
                        <source srcSet="https://pbs.twimg.com/profile_images/1575292182801653761/7ARe6ZOJ_400x400.jpg" type="image/jpg"/>
                        <img className='filter grayscale rounded-full max-h-32' src="https://pbs.twimg.com/profile_images/1575292182801653761/7ARe6ZOJ_400x400.jpg" alt="me-picture"/>
                    </picture>
                </div>
        </section>

        <div className='flex flex-col gap-2 justify-between flex-wrap md:flex-row border-gray-100 border-b-2
    dark:border-stone-600 mb-2'>
        <section className='flex flex-col gap-1 mb-7 md:w-1/3'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Essential Info</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>21 years old</li>
                                <li>I'm from Argentina</li>
                                <li>I've programming since fourtheen</li>
                                <li>I like to spent my time programming</li>
                        </ol>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>How do I learn/ed?</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400 '>
                        <ol>
                                <li>Reading docs</li>
                                <li>Reading books</li>
                                <li>Watching courses in Udemy</li>
                                <li>School</li>
                        </ol>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Hobbies</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                        <ol>
                                <li>Programming</li>
                                <li>Watching Karate Kid & Cobra Kai</li>
                                <li>Drinking Coffee</li>
                                <li>Learn, learn and learn</li>
                        </ol>
                </div>
            </section>
       </div>

   </Layout>
  
  </div>
  )
}


export default Projects