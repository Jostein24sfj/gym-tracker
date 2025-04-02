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
      <div className="muscleDetailTopText">
        <h2>{muscleName.toUpperCase()}</h2>
        <p>More details about {muscleName} exercises and programs.</p>
      </div>
      {/* Include any image or other content related to the muscle */}
      <img
        className="muscleImage"
        src={`./images/${muscleName}.jpg`} // Assuming you have images for each muscle
        alt={`${muscleName} image`}
      />
    </div>
  );
}
