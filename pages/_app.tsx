import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayOut from "../components/GlobalLayOut/GlobalLayOut";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayOut>
      <Component {...pageProps} />
    </GlobalLayOut>
  );
}

export default MyApp;
