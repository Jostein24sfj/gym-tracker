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
        <h3>Benkpress</h3>
        <img className="cardImg" src="/chestMuscles.jpg" alt="chest" />

        <p>
          Benkpress er en populær styrketreningsøvelse som hovedsakelig trener
          brystmusklene (pectoralis major), men også skuldre (deltoider) og
          triceps. Øvelsen utføres vanligvis med en vektstang og løftes fra en
          liggende posisjon på en benk. For å utføre benkpress korrekt: 1. Ligg
          på ryggen på en benk med føttene flatt på gulvet. 2. Hold stangen med
          et grep som er litt bredere enn skulderbredde. 3. Senk stangen
          kontrollert ned til brystet, og trykk den deretter tilbake til
          utgangsposisjonen med kraft. Benkpress er en av de mest brukte
          øvelsene for å bygge styrke og masse i overkroppen. Det er også en
          standard øvelse i styrkeløftkonkurranser.
        </p>
      </div>
      {/* Include any image or other content related to the muscle */}
      <img
        className="muscleImage"
        src={`/${muscleName}Muscles.jpg`} // Assuming you have images for each muscle
        alt={`${muscleName} image`}
      />
    </div>
  );
}
