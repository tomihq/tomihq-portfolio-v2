import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/900.css";
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
   <motion.div  initial="pageInitial" animate="pageAnimate" variants={{
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
          <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  </>
}

export default MyApp
