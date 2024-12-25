import React from 'react'
import Header from '../../../components/header/Header'
import Menu from '../../../components/header/Menu'
import Footer from '../../../components/footer/Footer'
import MusicList from '../../../components/musiclist/MusicList'

type Props = {}

const Music = (props: Props) => {
  return (
    <div className='super_container'>
    <Header/>
    <Menu/>
    <MusicList/>
    <Footer/>
    </div>
  )
}

export default Music