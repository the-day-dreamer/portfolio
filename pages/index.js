import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
import About from '@/components/About'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Services from '@/components/Services'
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Homepage/>
        
        <About/>
        <Services/>
        
      </main>
    </>
  )
}
