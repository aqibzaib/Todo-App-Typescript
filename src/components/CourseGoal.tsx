import React from "react";
type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
};
export default function CourseGoal({
  id,
  title,
  description,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
