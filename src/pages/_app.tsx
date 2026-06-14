import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dotfoodkorea.vercel.app";
const SITE_TITLE = "DotFoodKorea";
const SITE_DESCRIPTION =
  "DotFoodKorea connects premium foods from around the world and delivers Korean food culture globally.";
const OG_IMAGE = `${SITE_URL}/images/og.png`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
