import Head from "next/head";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Main Content */}
        <Hero />
      </main>
    </div>
  );
}
