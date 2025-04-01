import "./header.css";
export default function Header() {
  return (
    <>
      <div className="headerSection">
        <div>
          <button style={{ padding: "8px" }}>Gym Tracker</button>
        </div>
        <div>
          <button className="headerButtons" style={{ padding: "8px" }}>
            Programs
          </button>
          <button className="headerButtons" style={{ padding: "8px" }}>
            Favorites
          </button>
          <button className="headerButtons" style={{ padding: "8px" }}>
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
