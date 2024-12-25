import React from 'react'
import Header from '../../../components/header/Header'
import Menu from '../../../components/header/Menu'
import Home from '../../../components/home/Home'
import Featured_album from '../../../components/home/Featured_album'
import Shows from '../../../components/home/Shows'
import Artist from '../../../components/home/Artist'
import Footer from '../../../components/footer/Footer'
import Extra from '../../../components/home/Extra'
import MusicPlayerBar from '../../../components/MusicPlayerBar/MusicPlayerBar'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className  ="super_container">
      <Header/>
      <Menu/>
      <Home/>
      <Featured_album/>
      <Shows/>
      <Artist/>
      <Extra/>
      <Footer/>
      <MusicPlayerBar />
    </div>
  )
}

export default Homepage 