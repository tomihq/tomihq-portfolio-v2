import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { AvatarPicture } from '../components/ui/'
const Carreer: NextPage = () => {
   return(
    <div className='flex flex-col justify-center px-8'>
    <Layout 
    title={'My Carreer as Software Engineer'}
    pageDescription={'Tomi Hernández Experience as a Software Engineer Page'}
    >
        <section className='flex flex-col-reverse justify-between md:flex-row border-gray-100 border-b-2 mb-6 dark:border-stone-600'>
            <div className='flex flex-col pr-8 md:w-9/12'>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white pb-1">Software Engineer Experience</h1>
                <h2 className='tracking-tight mb-1 ml-1 text-stone-600 dark:text-white pb-2'>I even used a banana to create software <b className='text-black  dark:text-white'> ✨ </b></h2>
                <span className='ml-1 text-gray-600 dark:text-gray-400 mb-8'>I've programmed in Haskell, C, Visual Basic, Java, PHP and currently TypeScript.


                </span>       
            </div>
            <div className='flex flex-col'>
                <AvatarPicture/>
            </div>
        </section>
    
       <div className='flex flex-col gap-2 justify-between flex-wrap md:flex-row border-gray-100 border-b-2
    dark:border-stone-600 mb-2'>
        <section className='flex flex-col gap-1 mb-7 md:w-1/3'>
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Timeline</h3>
                    <div className='flex flex-col text-gray-800 dark:text-gray-400 gap-1'>
                        <span><span className='font-semibold dark:text-gray-400'>Hobby:</span> 2010 using Scratch</span>
                        <span><span className='font-semibold dark:text-gray-400'>Study:</span> 2016 learning Algorithms and Data Estructures at School</span>
                        <span><span className='font-semibold dark:text-gray-400'>Professional:</span> 2020 Freelance</span>
                    </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white mb-2'>Tecnologies</h3>
                    <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                    <div className='flex flex-col text-gray-800 dark:text-gray-400 gap-1'>
                        <span><span className='font-semibold dark:text-gray-400'>Backend: </span>["Haskell", "C", "Visual Basic", "Java", "PHP", "TypeScript"]</span>
                        <span><span className='font-semibold dark:text-gray-400'>Frontend: </span>React, Angular, Flutter, jQuery</span>
                        <span><span className='font-semibold dark:text-gray-400'>Frameworks: </span> NestJS, Express, NextJS, Laravel, TailwindCSS, Bootstrap</span>
                      
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/3'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Databases</h3>
                <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                    <div className='flex flex-col text-gray-800 dark:text-gray-400 gap-1'>
                        <span><span className='font-semibold dark:text-gray-400'>SQL: </span>["MySQL", "PostgreSQL"]</span>
                        <span><span className='font-semibold dark:text-gray-400'>No SQL: </span>MongoDB </span>
                        
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-1 mb-7 md:w-1/2'>
                <h3 className='font-bold text-2xl text-black dark:text-white'>Tools</h3>
                <div className='flex flex-col md:flex-row gap-6 text-gray-800 dark:text-gray-400'>
                    <div className='flex flex-col text-gray-800 dark:text-gray-400 gap-1'>
                        <span><span className='font-semibold dark:text-gray-400'>Databases: </span>MySQL Workbench, MongoCompass, Docker</span>
                        <span><span className='font-semibold dark:text-gray-400'>Server: </span>SFTP, FTP, GitHub, GitLab. </span>
                        <span><span className='font-semibold dark:text-gray-400'>Extra: </span>Redis, Multer, Putty</span>
                    </div>
                </div>
            </section>

       </div>

    </Layout>

    </div>
   )
}

export default Carreer