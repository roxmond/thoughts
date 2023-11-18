import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Share your Thoughts',
  description: 'Share your thoughts with your friends and discover what they think about them',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
