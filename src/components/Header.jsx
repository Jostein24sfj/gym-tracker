import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation(); // To track the current route
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Smooth scrolling function
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Conditional click function for the Gym Tracker logo
  const handleLogoClick = () => {
    if (location.pathname.includes("/muscle/")) {
      // If on the MuscleDetail page, navigate to the FrontPage and scroll to top
      navigate("/", { replace: true }); // Use replace to avoid adding history entry
      window.scrollTo({ top: 0, behavior: "smooth" }); // Ensure scroll to top
    } else {
      // If already on the FrontPage, scroll to the top
      scrollToSection("home");
    }
  };

  // Handle the "Programs" button click for smooth scrolling or navigation
  const handleProgramsClick = () => {
    if (location.pathname !== "/") {
      // If not on the FrontPage, navigate to the FrontPage
      navigate("/", { replace: true });

      // Use setTimeout to ensure the scroll happens after navigation
      setTimeout(() => {
        scrollToSection("programs"); // Scroll to the programs section after navigation
      }, 100); // Delay to allow the page to load and render
    } else {
      // If already on the FrontPage, just scroll to the programs section
      scrollToSection("programs");
    }
  };

  return (
    <div className="headerSection">
      {/* Logo button - scroll to top or take to frontpage based on route */}
      <div>
        <button
          onClick={handleLogoClick}
          className="headerLogo"
          style={{ padding: "8px" }}
        >
          Gym Tracker
        </button>
      </div>
      <div className="headerButtons">
        {/* Scroll to Programs */}
        <button
          onClick={handleProgramsClick}
          className="headerButton"
          style={{ padding: "8px" }}
        >
          Programs
        </button>
        {/* Scroll to About Me */}
        <button
          onClick={() => scrollToSection("aboutMe")}
          className="headerButton"
          style={{ padding: "8px" }}
        >
          About Me
        </button>
        {/* Keep Favorites & Contact for future */}
        <button className="headerButton" style={{ padding: "8px" }}>
          Favorites
        </button>
        <button className="headerButton" style={{ padding: "8px" }}>
          Contact
        </button>
      </div>
    </div>
  );
}
