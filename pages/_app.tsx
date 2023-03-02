import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/900.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
