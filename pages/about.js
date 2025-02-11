// ABOUT ME PAGE
import Head from "next/head";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <Head>
        <title>About Us</title>
      </Head>
      <div className="page">
      
        <main className="main">
          <h1>About Page</h1>
          <p>This is the about page of the application.</p>
          <p>It was created by Ilia Mchedlishvili for Humber's Computer Programming course. I am a first year and just started to learn react. I like how it is similar to HTML but the syntax is still very confusing for me as there are many rules.</p>
        </main>
      </div>
    </>
  );
}
