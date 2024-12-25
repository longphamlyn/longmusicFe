import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Menu from '../../../components/header/Menu'
import Home from '../../../components/page/AboutUs/Home'
import Discc from '../../../components/page/AboutUs/Discc'
import Artist from '../../../components/page/AboutUs/Artist'
import Milestones from '../../../components/page/AboutUs/Milestones'

type Props = {}

const AboutUsPage = (props: Props) => {
  return (
    <div className="super_container">
      <Header />
      <Menu />
      <Home />
      <Discc />

      <Artist />
      <Milestones />
      <Footer />
    </div>
  )
}

export default AboutUsPage