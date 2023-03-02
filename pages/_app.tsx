import '../styles/globals.css'
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/900.css";
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes'
import KBarProvider from '../components/Kbar/KBarProvider';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0.8
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        opacity: 0
      }
    }} transition={{
      type: "tween",
      ease: "anticipate",
      duration: 0.7
    }}>
       <ThemeProvider enableSystem={true} attribute='class'>
        <KBarProvider >
            <Component {...pageProps} />
        </KBarProvider>
      </ThemeProvider>
    </motion.div>
  </>
}

export default MyApp
