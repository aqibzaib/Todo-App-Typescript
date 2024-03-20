import React, { type FormEvent, useRef } from "react";
type NewGoalProp = {
  handleAddGoal: (goal: string, summary: string) => void;
};
export default function NewGoal({ handleAddGoal }: NewGoalProp) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const goalValue = goalRef.current!.value;
    const summaryValue = goalRef.current!.value;
    handleAddGoal(goalValue, summaryValue);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" name="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" ref={summaryRef} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
