import React, { Fragment } from "react";
import Header from "@/components/header/Header";
import TopHeader from "@/components/header/TopHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TheFooter from "@/components/footer/TheFooter";
import "../styles/prism-darcula.css";
import CookiesBanner from "@/components/cookies-banner/CookiesBanner";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <TopHeader />
      <Header />
      <Component {...pageProps} />
      <TheFooter />
      {/* <CookiesBanner /> */}
    </MantineProvider>
  );
}
