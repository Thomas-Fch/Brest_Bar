import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brest Bar',
  description: 'Votre compagnon pour vous mener aux lieux qui vous sciera le mieux. Pour un moment conviviale seul, ou entre potes !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='h-full'>
      <link rel="icon" href="/favicon.ico" />
      <body className={clsx(inter.className, "h-full")}>{children}</body>
    </html>
  )
}
