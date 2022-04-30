import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Header />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
