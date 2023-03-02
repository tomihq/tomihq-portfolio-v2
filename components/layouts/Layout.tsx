import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';
import { Footer } from "../ui/Footer";
interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const Layout:FC<PropsWithChildren<Props>> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={pageDescription}/>
            {
                imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl}/>   
                )
            }
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