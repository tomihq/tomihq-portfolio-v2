'use client';
import Link from "next/link"
export const Footer = () => {
  return (
    <>
    
    <div className="flex items-start 
    justify-between w-full relative 
    max-w-4xl mx-auto pt-8 pb-8 
    sm:pb-8 bg-opacity-60 border-gray-100 border-b-2
    dark:border-stone-600  flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
            
            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1">
                <h3 className="font-bold text-md text-black dark:text-white text-2xl md:text-lg">Social Media</h3>
                <ul className="text-gray-800 text-sm dark:text-gray-400">
                   
                    <li className="mb-1 text-xl md:text-base">
                        <Link href="https://github.com/tomihq" passHref target={'_blank'} rel="noreferrer">
                             GitHub
                        </Link> 
                    </li>

                    <li className="mb-1 text-xl md:text-base">
                        <Link href="https://open.spotify.com/user/rainbowskynow?si=423e038cabcf4af9" passHref target={'_blank'} rel="noreferrer">
                             Spotify
                        </Link> 
                    </li>

                </ul>

            </div>
            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1">
               <h3 className="font-bold text-md text-black dark:text-white text-2xl md:text-lg">Contáctame</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400">
                    <li className="mb-1 text-xl md:text-base">
                        <Link href="mailto:hernandeztomas584@gmail.com" passHref target={'_blank'} rel="noreferrer">
                            Email
                        </Link>
                    </li>
                    
                    
                </ul> 
            </div>

            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1 ">
               <h3 className="font-bold text-md text-black dark:text-white text-2xl md:text-lg">Acerca de mi futuro</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400" >
                    <li className="mb-1 text-xl md:text-base">
                        <Link href="/aboutme" passHref rel="noreferrer">
                             Académico
                        </Link> 
                    </li>
                    <li className="mb-1 text-xl md:text-base">
                        <Link href="/carreer" passHref rel="noreferrer">
                            Mi camino como Software Engineer
                        </Link> 
                    </li>
                    <li className="mb-1 text-xl md:text-base">
                        <Link href="/projects" passHref rel="noreferrer">
                             Proyectos personales
                        </Link> 
                    </li>

                </ul> 
            </div>
        </div>
       
    </div>
    <div className="flex items-center justify-center
        w-full relative 
        max-w-2xl border-gray-200 mx-auto pt-3 pb-8 
        sm:pb-4 bg-opacity-60 dark:text-gray-100">
        <div className='text-gray-600 dark:text-white'>
                Made with ❤️ by Tomi Hernández using NextJS and TypeScript
        </div>
    </div>
    
    </>
  )
}
