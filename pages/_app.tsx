import type { AppProps } from 'next/app'
import MainCotainer from '../components/MainCotainer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <MainCotainer>
        <Component {...pageProps} />
      </ MainCotainer>
   </>
  ) 
}

export default MyApp
