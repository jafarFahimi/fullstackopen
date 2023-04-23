import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const calcAverage = {
    good: 1,
    neutral: 0,
    bad: -1,
  };
  let total = good + bad + neutral;
  let ave = (good * calcAverage.good + neutral * calcAverage.neutral + bad * calcAverage.bad) / total;

  return (
    <div>
      <div>
        <br />
        <StatisticLine text="good" value={good} />
        <StatisticLine text="average" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={ave} />
        <StatisticLine text="positive" value={`${(100 * good) / total} %`} />
      </div>
    </div>
  );
};
export default Statistics;
