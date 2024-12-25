import React from 'react'
import Header from '../../../components/header/Header'
import Menu from '../../../components/header/Menu'
import Single from '../../../components/page/Single/Single'
import Video from '../../../components/page/Single/Video'
import Footer from '../../../components/footer/Footer'
import Home from '../../../components/page/Single/Home'

type Props = {}

const SinglePage = (props: Props) => {
  return (
    <div className='super_container'>
        <Header/>
        <Menu/>
        <Home/>
        <Single/>
        <Video/>
        <Footer/>
    </div>
  )
}

export default SinglePage