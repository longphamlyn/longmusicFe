import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Menu from '../../../components/header/Menu'
import Home from '../../../components/page/contact/Home'
import Contact from '../../../components/page/contact/Contact'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className='super_container'>
      <Header/>
      <Menu/>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage