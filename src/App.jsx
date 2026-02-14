import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const toggleTheme = () =>
    // setTheme("light" ? "dark": "light")
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <CardSection />
      <Footer />
    </>
  );
}

export default App;
