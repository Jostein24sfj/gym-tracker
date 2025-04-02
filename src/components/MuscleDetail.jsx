import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MuscleDetail() {
  const { muscleName } = useParams();

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="muscleDetailPage">
      <div className="muscleDetailTopText">
        <h2>{muscleName.toUpperCase()}</h2>
        <p>More details about {muscleName} exercises and programs.</p>
      </div>
    </div>
  );
}
