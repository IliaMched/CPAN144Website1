import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Counter from "./Counter";
import InteractiveComponent from "./InteractiveComponent";
import ThemeSwitcher from "./ThemeSwitcher";
import Navbar from "./Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar />
      <Head>
        <title>My React Website</title>
      </Head>
      <div className={`page ${geistSans.variable} ${geistMono.variable}`}>
     
        <main className="main">
          <h1>Welcome to Ilia's showcase Website</h1>
         
          <Counter />
          <InteractiveComponent />
          <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
      </div>
    </>
  );
}
