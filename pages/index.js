import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Map from '../comps/Map'
import Header from '../comps/header'
import Footer from '../comps/footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Map/>
      <Footer/>
    </div>
  )
}
