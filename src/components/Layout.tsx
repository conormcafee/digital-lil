import Head from "next/head";
import { Footer } from "./Footer";

interface Props {
  children?: React.ReactNode;
  pageTitle: string;
}

export const Layout: React.FC<Props> = ({
  children,
  pageTitle = "Digital Lil",
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
};