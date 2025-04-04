import { FaRegStar } from "react-icons/fa";
export const ExerciseCard = ({ exercise, index }) => {
  return (
    <div key={exercise.name + index} className="øvelser">
      <div className="øvelseInfo">
        <img className="cardImg" src={exercise.src} alt="chest" />
        <div className="øvelserInfoText">
          <div className="favoriteSection">
            <h3>{exercise.name}</h3>
            <div className="favoriteButton">
              <FaRegStar
                style={{ color: "yellow", width: "24px", height: "24px" }}
              />
            </div>
          </div>
          <p>{exercise.description}</p>
        </div>
      </div>
    </div>
  );
};
