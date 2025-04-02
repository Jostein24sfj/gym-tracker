import Header from "./components/Header.jsx";
import "./App.css";
import FrontPage from "./FrontPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MuscleGroups from "./components/muscleGroups.jsx";

export default function App() {
  return (
    <>
      <Header />
      <FrontPage />
      <br />
      <br />
      <MuscleGroups />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutMe />
      <div>Dette er app jsx</div>
    </>
  );
}
