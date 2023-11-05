import Footer from "@/components/utils/Footer";
import Nav from "@/components/utils/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}
