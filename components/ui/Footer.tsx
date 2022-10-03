export const Footer = () => {
  return (
    <>
    <div className="flex items-center 
    justify-between w-full relative 
    max-w-2xl border-gray-200 mx-auto pt-8 pb-8 
    sm:pb-4 bg-opacity-60 dark:text-gray-100 border-b-2">
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
            
            <div className="flex flex-col w-4/12">
                <h3 className="font-bold text-md text-black dark:text-white">Social Media</h3>
                <ul className="text-gray-800 text-sm dark:text-gray-400">
                    <li>Twitter</li>
                    <li>GitHub</li>
                    <li>Spotify</li>

                </ul>

            </div>
            <div className="flex flex-col w-4/12">
               <h3 className="font-bold text-md text-black dark:text-white">Contact Me</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400">
                    <li>Send me an email</li>
                    <li>Send me a Twitter DM</li>
                    <li>Send me a hug</li>

                </ul> 
            </div>

            <div className="flex flex-col w-4/12">
               <h3 className="font-bold text-md text-black dark:text-white">About my future</h3>
               <ul className="text-gray-800 text-sm dark:text-gray-400" >
                    <li>Study</li>
                    <li>Carreer as Software Engineer</li>
                    <li>CTO, maybe?</li>

                </ul> 
            </div>
        </div>
       
    </div>
    <div className="flex items-center justify-center
        w-full relative 
        max-w-2xl border-gray-200 mx-auto pt-3 pb-8 
        sm:pb-4 bg-opacity-60 dark:text-gray-100">
        <div className='text-gray-600 dark:text-white'>
                Made with ❤️ by Tomi Hernández
        </div>
    </div>
    
    </>
  )
}
