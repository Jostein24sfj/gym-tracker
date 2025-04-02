import "./FrontPage.css";
import MuscleGroups from "./components/MuscleGroups.jsx";
import AboutMe from "./components/AboutMe.jsx";

export default function FrontPage() {
  return (
    <>
      <section id="home">
        <div className="backgrounds">
          <div className="backgroundImg firstBackgroundImg" />
          <div className="backgroundImg secondBackgroundImg" />
        </div>
        <div className="frontPageContent">
          <div className="frontPageText">
            <h3>
              Her finner du <b>alt</b> du trenger for å trene<b>.</b>
            </h3>
            <p>
              Enten om du er <b>ny</b> til trening, eller har erfaring og ønsker
              en <b>solid</b> måte og følge opp treningen videre!
            </p>
          </div>
          <img
            id="weightPlate"
            className="weightPlate"
            src="./titanLifeVekt.png"
            alt="Bilde av en vektskive"
          />
        </div>
      </section>

      {/* Add an ID for scrolling */}
      <section id="programs">
        <MuscleGroups />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Add an ID for scrolling */}
      <section id="aboutMe">
        <AboutMe />
      </section>
    </>
  );
}
