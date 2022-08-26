import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidbar from './Sidbar';


interface LayoutProps {
  children: React.ReactNode;
}
function MainCotainer({children}: LayoutProps) {
  return (
    <>
      <Sidbar/>
      <Header />
        <div>{children}</div>
      <Footer/>
    </>
  )
}

export default MainCotainer