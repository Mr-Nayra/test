import React from "react";
import Header from "@/components/header/Header";
import TopHeader from "@/components/header/TopHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TheFooter from "@/components/footer/TheFooter";
import "../styles/prism-darcula.css";
import { MantineProvider } from "@mantine/core";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: "https://app.posthog.com",
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <MantineProvider>
        <TopHeader />
        <Header />
        <Component {...pageProps} />
        <TheFooter />
      </MantineProvider>
    </PostHogProvider>
  );
}
