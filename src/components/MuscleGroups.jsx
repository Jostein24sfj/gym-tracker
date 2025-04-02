import { Link } from "react-router-dom";
import "./muscleGroups.css";

export default function MuscleGroups() {
  return (
    <>
      <div className="muscleGroupTitle textShadow">
        <h2>
          Muskelgrupper <b>&</b> Programmer
        </h2>
      </div>
      <div className="muscleGroupCards textShadow">
        <Link to="/muscle/chest" className="card">
          <h3>Chest</h3>
          <img className="cardImg" src="/chestMuscles.jpg" alt="chest" />
        </Link>
        <Link to="/muscle/back" className="card">
          <h3>Back</h3>
          <img className="cardImg" src="/backMuscles.jpg" alt="back" />
        </Link>
        <Link to="/muscle/legs" className="card">
          <h3>Legs</h3>
          <img className="cardImg" src="/legMuscles.jpg" alt="legs" />
        </Link>
        <Link to="/muscle/core" className="card">
          <h3>Core</h3>
          <img className="cardImg" src="/coreMuscles.jpg" alt="core" />
        </Link>
        <Link to="/muscle/arms" className="card">
          <h3>Arms</h3>
          <img className="cardImg" src="/armMuscle.jpg" alt="arms" />
        </Link>
        <Link to="/muscle/shoulders" className="card">
          <h3>Shoulders</h3>
          <img className="cardImg" src="/shoulderMuscles.jpg" alt="shoulders" />
        </Link>
      </div>
    </>
  );
}
