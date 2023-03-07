import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';
import { Footer } from "../ui/Footer";
import { motion } from 'framer-motion';
interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    canonicalURL?: string;
    robotsAction?: 'noindex, follow' | 'follow'
}

export const Layout:FC<PropsWithChildren<Props>> = ({ children, title, pageDescription, imageFullUrl, canonicalURL, robotsAction = 'follow'}    ) => {
  return (
    <>
           <Head>
            <title>{title + ' | Tomás Hernández'   }</title>
            <meta property="og:site_name" content="Portfolio de Tomás Hernández"/> 
            <meta name="description" content={pageDescription}/>
            <meta name="og:title" content={title + ' | tomihq'}/>
            <meta name="og:description" content={pageDescription}/>
            <meta name="twitter:title" content={title}/> 
            <meta name="twitter:description" content={pageDescription}/> 
            {
                imageFullUrl && (
                   <>
                     <meta name="twitter:image" content={imageFullUrl}/> 
                     <meta name="og:image" content={imageFullUrl}/>   
                   </>
                )
            }
            {
              canonicalURL && (
                <link rel="canonical" href={'https://tomihq-portfolio-v2.vercel.app' +canonicalURL}/>
              )
            }
            
            
            <meta name="robots" content={robotsAction}></meta>
        </Head>

        <nav>
             <Navbar/>
        </nav>

        <main className='
                 max-w-4xl border-gray-200 mx-auto pt-8 pb-8 
                 sm:pb-0 bg-opacity-60 dark:text-gray-100'>
            {children}
        </main>
      
      <footer>
            <Footer/>
      </footer> 
    </>
  )
}