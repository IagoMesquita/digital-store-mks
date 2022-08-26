import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar';


interface LayoutProps {
  children: React.ReactNode;
}
function MainCotainer({children}: LayoutProps) {
  return (
    <>
      <Sidebar/>
      <Header />
        <div>{children}</div>
      <Footer/>
    </>
  )
}

export default MainCotainer