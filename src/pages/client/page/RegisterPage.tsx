import React from 'react'
import Header from '../../../components/header/Header'
import Menu from '../../../components/header/Menu'
import Footer from '../../../components/footer/Footer'
import SignUp from '../../../components/login_register/SignUp'


type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <div className='super_container'>
    <Header/>
    <Menu/>
    <SignUp/>
    <Footer/>
</div>
  )
}

export default RegisterPage