import { AppProps } from "next/app"; //fpr conversion to typescript
import { useState, useEffect } from "react";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) { 
  const [darkMode, setDarkMode] = useState(false);
//local storage to store dark/light mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("darkMode") === "true";
      setDarkMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark-mode", darkMode);
      document.body.classList.toggle("light-mode", !darkMode);
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode]);

  return <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />;
}

export default MyApp;
