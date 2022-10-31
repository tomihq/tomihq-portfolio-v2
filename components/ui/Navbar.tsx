import Link from 'next/link';
import {useRouter} from 'next/router';
import { SideMenu } from './SideMenu';
import { ThemeSwitcher } from './ThemeSwitcher';
export const Navbar = () => {
  const router = useRouter();

  return (
    <div className='flex items-center 
      justify-between w-full relative 
      max-w-2xl border-gray-200 mx-auto pt-8 pb-8 
      sm:pb-4 bg-opacity-60 dark:text-gray-100'>
      <SideMenu/>
      <section className='ml-[-0.60rem]'>
           <Link href="/">
            <a href="" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/'?'text-black font-semibold':'text-gray-700'}`}>Home</a>
          </Link>

          <Link href="/projects">
           <a href="" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/projects'?'text-black font-semibold':'text-gray-700'}`}>Projects</a>
          </Link>
        
        <Link href="/aboutme">
          <a href="" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/aboutme'?'text-black font-semibold':'text-gray-700'}`}>About me</a>
        </Link>

        <Link href="/carreer">
          <a href="" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/carreer'?'text-black font-semibold':'text-gray-700'}`}>Carreer as Software Engineer</a>
        </Link>
      </section>
   
     
      <ThemeSwitcher/>

    
      
    </div>
  )
}