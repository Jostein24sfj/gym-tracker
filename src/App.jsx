import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import FrontPage from "./FrontPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MuscleGroups from "./components/MuscleGroups.jsx";
import MuscleDetail from "./components/MuscleDetail.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/muscle-groups" element={<MuscleGroups />} />
        <Route path="/muscle/:muscleName" element={<MuscleDetail />} />
        <Route path="/about" element={<AboutMe />} />
        <Route
          path="/favorites"
          element={<div>Favorites Page (Coming Soon)</div>}
        />
        <Route
          path="/contact"
          element={<div>Contact Page (Coming Soon)</div>}
        />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Router>
  );
}
