import Head from "next/head";
import Link from "next/link";
import type { NextPageWithLayout } from "@/types/page";
import { Layout } from "@/components/layout";
const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Head>
        <title>chendap Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          This is{" "}
          <Link href="./blog" className="underline-offset-1">
            My Blog
          </Link>
        </h1>
      </main>
    </div>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
