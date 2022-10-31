import Link from "next/link";
import { useState } from "react"
import {useRouter} from 'next/router';

export const SideMenu = () => {
  const router = useRouter();
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const handleOpenSideMenu = () =>{
    setOpenSideMenu(!openSideMenu);
  }

  return (
    <>
    
      <div className="md:hidden z-10"  onClick={() => handleOpenSideMenu()}>
        <button className="navbar-burger flex items-center text-black dark:text-white p-3">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
  
    <div className={`navbar-menu relative z-50 sm:hidden ${openSideMenu?'block':'hidden'}`}>
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <div className="fixed top-0 left-0 bottom-0 flex flex-col gap-y-4 w-5/6 max-w-sm py-6 px-6 bg-white  overflow-y-auto dark:bg-black">
        <div className="flex items-center mb-4 p-4 pb-0">
          <button className="navbar-close" onClick={() => handleOpenSideMenu()}>
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4">
          <ul className="flex flex-col gap-2">
          <li className="border-gray-100 border-b-2 dark:border-stone-600 mb-3 pb-1"  onClick={() => handleOpenSideMenu()}>
            <Link href="/" passHref >
              <a href="" className={`dark:text-gray-200  md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/'?'text-black font-semibold':'text-gray-700'}`}>Home</a>
            </Link>
          </li>

        <li className='border-gray-100 border-b-2 dark:border-stone-600 mb-3 pb-1'  onClick={() => handleOpenSideMenu()}>
          <Link href="/projects" passHref >
            <a href="" className={`dark:text-gray-200  md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/proyects'?'text-black font-semibold':'text-gray-700'}`}>Proyects</a>
            </Link>
        </li>
        
        <li className="border-gray-100 border-b-2 dark:border-stone-600 mb-3 pb-1"  onClick={() => handleOpenSideMenu()}>
          <Link href="/aboutme" passHref>
            <a href="" className={`dark:text-gray-200  md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/aboutme'?'text-black font-semibold':'text-gray-700'}`}>About me</a>
          </Link>
        </li>

        <li className="border-gray-100 border-b-2 dark:border-stone-600 mb-3 pb-1"  onClick={() => handleOpenSideMenu()}>
          <Link href="/carreer" passHref>
            <a href="" className={`dark:text-gray-200  md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${router.pathname=='/carreer'?'text-black font-semibold':'text-gray-700'}`}>Carreer as Software Engineer</a>
          </Link>
        </li>
          </ul>
        </div>
       
      
      </div>
    </div>
    </>
  )
  

  
}