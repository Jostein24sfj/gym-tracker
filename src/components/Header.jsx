import "./header.css";
export default function Header() {
  return (
    <>
      <div className="headerSection">
        <div>
          <button
            onClick={() => window.scroll(0, 0)}
            className="headerLogo"
            style={{ padding: "8px" }}
          >
            Gym Tracker
          </button>
        </div>
        <div className="headerButtons">
          <button className="headerButton" style={{ padding: "8px" }}>
            Programs
          </button>
          <button className="headerButton" style={{ padding: "8px" }}>
            Favorites
          </button>
          <button className="headerButton" style={{ padding: "8px" }}>
            Contact
          </button>
          <button className="headerButton" style={{ padding: "8px" }}>
            About Me
          </button>
        </div>
      </div>
    </>
  );
}
