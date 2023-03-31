import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>CS101</title>
        <link rel="icon" href="/circle_basic.png" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
