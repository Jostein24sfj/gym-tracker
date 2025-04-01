import Header from "./components/Header.jsx";
import "./App.css";
import FrontPage from "./FrontPage.jsx";
import AboutMe from "./components/AboutMe.jsx";

export default function App() {
  return (
    <>
      <Header />
      <FrontPage />
      <AboutMe />
      <div>Dette er app jsx</div>
    </>
  );
}
