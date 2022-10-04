import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <Head />

        <div className="container">
          <h1>About Page</h1>
        </div>
      </Layout>
    </>
  );
}
