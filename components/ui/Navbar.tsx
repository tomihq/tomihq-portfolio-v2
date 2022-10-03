import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <div className='flex items-center 
      justify-between w-full relative 
      max-w-2xl border-gray-200 mx-auto pt-8 pb-8 
      sm:pb-4 bg-opacity-60 dark:text-gray-100'>
      <section className='ml-[-0.60rem]'>
           <NextLink href="/" passHref prefetch={true}>
            <a href="" className='font-semibold text-black dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>Home</a>
          </NextLink>

          <NextLink href="/proyects" passHref prefetch={true}>
           <a href="" className='font-semibold text-black dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>Proyects</a>
          </NextLink>
        
        <NextLink href="/aboutme" passHref prefetch={true}>
          <a href="" className='font-semibold text-black dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>About me</a>
        </NextLink>
      </section>
   
      <button className='w-9 h-9 bg-gray-200 rounded-lg  flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'>
          <span className=''>HOLA</span>
      </button>
      
    </div>
  )
}