'use client';
import { useKBar } from 'kbar';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Settings from '../../assets/svg/Settings';
import { SideMenu } from './SideMenu';
export const Navbar = () => {
  const pathname = usePathname();

  const { query } = useKBar()


  return (
    <div className='flex items-center 
      justify-between w-full relative 
      max-w-4xl border-gray-200 mx-auto pt-8 pb-8 
      sm:pb-4 bg-opacity-60 dark:text-gray-100'>
      <SideMenu />
      <section className='ml-[-0.60rem]'>
        <Link href="/" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${pathname == '/' ? 'text-black font-semibold' : 'text-gray-700'}`} passHref>
          Home
        </Link>

        <Link href="/projects" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${pathname == '/projects' ? 'text-black font-semibold' : 'text-gray-700'}`} passHref>
           Proyectos
        </Link>

        <Link href="/aboutme" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${pathname == '/aboutme' ? 'text-black font-semibold' : 'text-gray-700'}`} passHref>
          Acerca de mí
        </Link>

        <Link href="/carreer" className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${pathname == '/carreer' ? 'text-black font-semibold' : 'text-gray-700'}`} passHref>
          Mi camino como Software Engineer
        </Link>
      </section>

      <button
					className="flex h-9 w-9 items-center justify-center rounded duration-300 hover:bg-[#555] dark:hover:bg-accent hover:text-white"
					onClick={() => query.toggle()}
					aria-label="Command Bar"
				>
					<Settings />
			</button>



    </div>
  )
}