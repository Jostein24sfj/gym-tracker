export const ExerciseCard = ({ exercise, index }) => {
  return (
    <div key={exercise.name + index} className="øvelser">
      <div className="øvelseInfo">
        <img className="cardImg" src={exercise.src} alt="chest" />
        <div className="øvelserInfoText">
          <h3>{exercise.name}</h3>
          <p>{exercise.description}</p>
        </div>
      </div>
    </div>
  );
};
