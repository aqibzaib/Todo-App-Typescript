import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalList) {
  return (
    <ul>
      {goals.map((goal, index) => (
        <li key={index}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
}
