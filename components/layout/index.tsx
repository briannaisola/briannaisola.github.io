import { FC } from "react";
import Head from "next/head";

export interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mt-12 block mx-auto container">
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      {children}
      <footer className=""></footer>
    </div>
  );
};

export default Layout;
