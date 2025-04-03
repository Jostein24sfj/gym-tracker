import { ExerciseCard } from "./ExerciseCard";
import exercises from "../../data/exercises.json";

export const ExerciseSection = ({ type }) => {
  console.log(exercises);
  const exerciseByType = exercises.filter((exercise) => exercise.type === type);
  console.log(exerciseByType);
  return (
    <>
      {exerciseByType.map((exercise) => (
        <div key={exercise.name}>
          <ExerciseCard exercise={exercise} />
        </div>
      ))}
    </>
  );
};
