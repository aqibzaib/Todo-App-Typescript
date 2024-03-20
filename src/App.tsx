import CourseGoal from "./components/CourseGoal";
import "../src/index.css";
import GoalImage from "../src/assets/goals.jpg";
import React, { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoal) => {
      const newGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoal, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    const updatedGoal = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoal);
  };
  return (
    <main>
      <Header image={{ src: GoalImage, alt: "A List of goals" }}>
        <h1>Your Goals here</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal} />
      <br />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
