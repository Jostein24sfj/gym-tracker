import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./muscleDetail.css";

export default function MuscleDetail() {
  const { muscleName } = useParams();
  const location = useLocation();

  // Scroll to the top of the page when this page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This will trigger when the location changes

  return (
    <div className="muscleDetailPage">
      <div className="muscleDetailTopText textShadow">
        <h2>{muscleName.toUpperCase()}</h2>
        <p>More details about {muscleName} exercises and programs.</p>
      </div>
      <div className="øvelser">
        <div className="øvelseInfo">
          <img className="cardImg" src="/public/benchPress.png" alt="chest" />
          <div className="øvelserInfoText">
            <h3>Benkpress</h3>
            <p>
              Benkpress er en populær styrketreningsøvelse som hovedsakelig
              trener brystmusklene (pectoralis major), men også skuldre
              (deltoider) og triceps. Øvelsen utføres vanligvis med en vektstang
              og løftes fra en liggende posisjon på en benk. For å utføre
              benkpress korrekt: 1. Ligg på ryggen på en benk med føttene flatt
              på gulvet. 2. Hold stangen med et grep som er litt bredere enn
              skulderbredde. 3. Senk stangen kontrollert ned til brystet, og
              trykk den deretter tilbake til utgangsposisjonen med kraft.
              Benkpress er en av de mest brukte øvelsene for å bygge styrke og
              masse i overkroppen. Det er også en standard øvelse i
              styrkeløftkonkurranser.
            </p>
          </div>
        </div>
      </div>
      <div className="øvelser">
        <div className="øvelseInfo">
          <img
            className="cardImg"
            src="/public/cableFlyes.webp"
            alt="cableflyes"
          />
          <div className="øvelserInfoText">
            <h3>Cable Flyes</h3>
            <p>
              Cable flyes er en styrketreningsøvelse som primært trener
              brystmusklene (pectoralis major). Øvelsen utføres ved hjelp av
              kabelmaskiner, og gir en konstant spenning gjennom hele
              bevegelsen, noe som gir en effektiv trening for brystet. For å
              utføre cable flyes: 1. Juster kabelmaskinen til øyehøyde og fest
              håndtakene på begge sidene. 2. Ta tak i håndtakene med begge
              hender og stå i en stabil posisjon, med et lite bøy i knærne. 3.
              Trekk hendene sammen foran kroppen, og fokuser på å klemme
              brystmusklene på toppen. 4. Senk langsomt hendene tilbake til
              utgangsposisjonen, og kontroller bevegelsen. Cable flyes er en
              flott øvelse for å isolere brystmusklene og for å forbedre
              brystets form og definisjon.
            </p>
          </div>
        </div>
      </div>
      {/* Include any image or other content related to the muscle */}
      {/* <img
        className="muscleImage"
        src={`/${muscleName}Muscles.jpg`} // Assuming you have images for each muscle
        alt={`${muscleName} image`}
      /> */}
    </div>
  );
}
