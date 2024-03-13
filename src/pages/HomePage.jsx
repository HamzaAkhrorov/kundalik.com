import React from 'react'
import SwiperPage from "./swiper/SwiperPage";
import Header from '../components/Header'
import Footer from '../components/Footer'
function HomePage() {
  return (
    <>
    <Header/>
    <div>
    <SwiperPage/>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage