import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="aboutMeContent">
        <img className="aboutMeImg" src="./aboutMe.png" alt="bilde av meg" />
        {/* <img className="aboutMeImg" src="/public/IMG_22555.png" alt="bilde" /> */}
        <div className="aboutMeText">
          <h3>
            Litt Om Meg<b>.</b>
          </h3>
          <p>
            Jeg har i flere år drevet med trening. Mer rettet muskel og
            styrkebygging. Bodybuilding og styrketrening er bra fordi de bygger
            muskler, øker styrken, forbedrer kroppsholdning og reduserer
            risikoen for skader. Det styrker også bein, hjelper med
            vektkontroll, og forbedrer mental helse ved å redusere stress.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
