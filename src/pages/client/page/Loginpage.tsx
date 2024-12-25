import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Menu from '../../../components/header/Menu'
import Login from '../../../components/login_register/Login'

type Props = {}

const Loginpage = (props: Props) => {
  return (
    <div className='super_container'>
        <Header/>
        <Menu/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default Loginpage