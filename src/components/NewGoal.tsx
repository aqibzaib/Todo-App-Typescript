import React, { type FormEvent, useRef, useState } from "react";
type NewGoalProp = {
  handleAddGoal: (goal: string, summary: string) => void;
};
export default function NewGoal({ handleAddGoal }: NewGoalProp) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const [goalError, setGoalError] = useState<boolean>(false);
  const [summaryError, setsummaryError] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const goalValue = goalRef.current!.value;
    const summaryValue = summaryRef.current!.value;
    if (goalValue.length <= 0) {
      setGoalError(true);
    } else {
      setGoalError(false);
    }

    if (summaryValue.length <= 0) {
      setsummaryError(true);
    } else {
      setsummaryError(false);
    }
    if (goalValue.length >= 1 && summaryValue.length >= 1) {
      handleAddGoal(goalValue, summaryValue);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input
          type="text"
          id="goal"
          name="goal"
          ref={goalRef}
          style={{ border: goalError ? "2px solid red" : "" }}
        />
        {goalError && <span>Please enter a goal.</span>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          type="text"
          id="summary"
          name="summary"
          ref={summaryRef}
          style={{ border: summaryError ? "2px solid red" : "" }}
        />
        {summaryError && <span>Please enter a Summary.</span>}
      </p>
      <button>Add Goal</button>
    </form>
  );
}
