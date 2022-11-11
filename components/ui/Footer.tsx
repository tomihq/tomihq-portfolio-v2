import Link from "next/link"
export const Footer = () => {
  return (
    <>
    
    <div className="flex items-start 
    justify-between w-full relative 
    max-w-2xl mx-auto pt-8 pb-8 
    sm:pb-8 bg-opacity-60 border-gray-100 border-b-2
    dark:border-stone-600  flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
            
            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1">
                <h3 className="font-bold text-md text-black dark:text-white text-xl">Social Media</h3>
                <ul className="text-gray-800 text-sm dark:text-gray-400">
                    <li className="mb-1 text-base">
                        <Link href="https://twitter.com/ttomihq" passHref>
                             <a href="https://twitter.com/ttomihq" target={'_blank'} rel="noreferrer">Twitter</a>
                        </Link> 
                    </li>
                    <li className="mb-1 text-base">
                        <Link href="https://github.com/tomihq" passHref >
                             <a href="https://github.com/tomihq" target={'_blank'} rel="noreferrer">GitHub</a>
                        </Link> 
                    </li>

                    <li className="mb-1 text-base">
                        <Link href="https://open.spotify.com/user/rainbowskynow?si=423e038cabcf4af9" passHref>
                             <a href="https://open.spotify.com/user/rainbowskynow?si=423e038cabcf4af9" target={'_blank'} rel="noreferrer">Spotify</a>
                        </Link> 
                    </li>

                </ul>

            </div>
            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1">
               <h3 className="font-bold text-md text-black dark:text-white  text-xl">Contact Me</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400">
                    <li className="mb-1 text-base"><a href="mailto:hernandeztomas584@gmail.com" target={'_blank'} rel="noreferrer">Email</a></li>
                    <li className="mb-1 text-base"><a href="https://twitter.com/ttomihq" target={'_blank'} rel="noreferrer">Twitter DM</a></li>
                    <li className="mb-1 text-base"><a href="https://twitter.com/ttomihq" target={'_blank'} rel="noreferrer">Telekinesis</a></li>

                </ul> 
            </div>

            <div className="flex flex-col w-6/12 md:w-4/12 gap-y-1 ">
               <h3 className="font-bold text-md text-black dark:text-white  text-xl">About my future</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400" >
                    <li className="mb-1 text-base">
                        <Link href="/aboutme" passHref>
                             <a href="/aboutme" rel="noreferrer">Academic</a>
                        </Link> 
                    </li>
                    <li className="mb-1 text-base">
                        <Link href="/carreer" passHref>
                             <a href="/carreer" rel="noreferrer">Carreer as Software Engineer</a>
                        </Link> 
                    </li>
                    <li className="mb-1 text-base"><Link href="/projects" passHref>
                             <a href="/projects" rel="noreferrer">Personal Projects</a>
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
