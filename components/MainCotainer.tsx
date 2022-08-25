import React from 'react'
import Header from './Header'
import Footer from './Footer'


interface LayoutProps {
  children: React.ReactNode;
}
function MainCotainer({children}: LayoutProps) {
  return (
    <>
      <Header />
        <div>{children}</div>
      <Footer/>
    </>
  )
}

export default MainCotainer