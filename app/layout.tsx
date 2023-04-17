import './globals.css';
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Portfolio | Tomás Hernández',
  description: 'Tomi Hernández Portfolio Home Page',
}

const font = Inter({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
                {children}
      </body>
    </html>
  )
}
