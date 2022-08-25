import type { AppProps } from 'next/app'
import MainCotainer from '../components/MainCotainer'
import GlobalStyled from '../styles/globalStyled'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyled />
      <MainCotainer>
        <Component {...pageProps} />
      </ MainCotainer>
   </>
  ) 
}

export default MyApp
