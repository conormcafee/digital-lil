import Head from "next/head";
import { Footer } from "./Footer";

interface Props {
  children?: React.ReactNode;
  pageTitle: string;
  description?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  pageTitle = "Digital Lil",
  description = "Digital Lil leverages the latest digital marketing techniques and technologies.",
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
};
