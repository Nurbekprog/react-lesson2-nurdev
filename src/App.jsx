import "./App.css";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Articles/>
      <Contact/>
    </>
  );
}

export default App;
