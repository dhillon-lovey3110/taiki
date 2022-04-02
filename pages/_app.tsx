import { useEffect } from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import { ModalContextProvider } from "../contexts/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
        <Component {...pageProps} />
    </ModalContextProvider>
  );
}

export default MyApp;