import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z'>
      <Head>
        <title>Prathmesh's portfolio</title>
       
      </Head>

      <Header/>

      <section id='hero' className='snap-center'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>
    </div>
  )
}

export default Home
