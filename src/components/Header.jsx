import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation(); // To track the current route
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Smooth scrolling function
  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // If already on the FrontPage, scroll to the section
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, navigate to the FrontPage and then scroll
      navigate("/", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" }); // Ensure scroll to top
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to ensure page has loaded
    }
  };

  // Conditional click function for the Gym Tracker logo
  const handleLogoClick = () => {
    if (location.pathname.includes("/muscle/")) {
      // If on the MuscleDetail page, navigate to the FrontPage and scroll to top
      navigate("/", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" }); // Ensure scroll to top
    } else {
      // If already on the FrontPage, scroll to the top
      scrollToSection("home");
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
          onClick={() => scrollToSection("programs")}
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
