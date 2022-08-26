import type { AppProps } from "next/app";
import MainCotainer from "../components/MainCotainer";
import GlobalStyled from "../styles/globalStyled";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Provider store={ store }>
        <MainCotainer>
          <Component {...pageProps} />
        </MainCotainer>
      </Provider>
    </>
  );
}

export default MyApp;
