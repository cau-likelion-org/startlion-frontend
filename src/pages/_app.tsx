import Footer from "@/components/utils/Footer";
import Nav from "@/components/utils/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const DynamicNav = dynamic(() => import("@/components/utils/Nav"), {
    ssr: false,
  });
  return (
    <RecoilRoot>
      <DynamicNav />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}
