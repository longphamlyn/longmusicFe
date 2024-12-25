import React from 'react'
import Home from '../../../components/page/blog/Home'
import Blog from '../../../components/page/blog/Blog'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

type Props = {}

const NewsPage = (props: Props) => {
  return (
    <div className='super_container'>
      <Header/>
      <Home/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default NewsPage