// CONTACT FORM PAGE WITH CONFIRMATION
import Head from "next/head";
 
import Navbar from "./Navbar";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Contact({ darkMode, setDarkMode }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="page">
       
        <main className="main">
          <h1>Contact Page</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label>Name: <input type="text" required /></label><br />
              <label>Email: <input type="email" required /></label><br />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <p>Thank you for contacting us! We'll get back to you soon.</p>
          )}
          <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
      </div>
    </>
  );
}
