import { useKBar } from 'kbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Settings from '../../assets/svg/Settings';
import { SideMenu } from './SideMenu';
export const Navbar = () => {
  const router = useRouter();

  const { query } = useKBar()
  console.log(query.toggle)


  return (
    <div className='flex items-center 
      justify-between w-full relative 
      max-w-4xl border-gray-200 mx-auto pt-8 pb-8 
      sm:pb-4 bg-opacity-60 dark:text-gray-100'>
      <SideMenu />
      <section className='ml-[-0.60rem]'>
        <Link href="/" passHref>
          <a className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname == '/' ? 'text-black font-semibold' : 'text-gray-700'}`}>Home</a>
        </Link>

        <Link href="/projects" passHref>
          <a className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname == '/projects' ? 'text-black font-semibold' : 'text-gray-700'}`}>Proyectos</a>
        </Link>

        <Link href="/aboutme" passHref>
          <a className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname == '/aboutme' ? 'text-black font-semibold' : 'text-gray-700'}`}>Acerca de mí</a>
        </Link>

        <Link href="/carreer" passHref>
          <a className={`dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname == '/carreer' ? 'text-black font-semibold' : 'text-gray-700'}`}>Mi camino como Software Engineer</a>
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