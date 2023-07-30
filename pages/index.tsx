import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>academiX</title>
      </Head>
      <main>
        <Header />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
