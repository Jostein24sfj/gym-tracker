import "./muscleGroups.css";

export default function MuscleGroups() {
  return (
    <>
      <div className="muscleGroupTitle">
        <h2>
          Muskelgrupper <b>&</b> Programmer
        </h2>
      </div>
      <div className="muscleGroupCards">
        <div className="card">
          <h3>Chest</h3>
          <img className="cardImg" src="/public/chestMuscles.jpg" alt="chest" />
        </div>
        <div className="card">
          <h3>Back</h3>
          <img className="cardImg" src="/public/backMuscle.jpg" alt="back" />
        </div>
        <div className="card">
          <h3>Legs</h3>
          <img className="cardImg" src="/public/legMuscles.jpg" alt="legs" />
        </div>
        <div className="card">
          <h3>Core</h3>
          <img className="cardImg" src="/public/coreMuscles.jpg" alt="core" />
        </div>
        <div className="card">
          <h3>Arms</h3>
          <img className="cardImg" src="/public/armMuscle.jpg" alt="arms" />
        </div>
        <div className="card">
          <h3>Shoulders</h3>
          <img
            className="cardImg"
            src="/public/shoulderMuscles.jpg"
            alt="shoulders"
          />
        </div>
      </div>
    </>
  );
}
