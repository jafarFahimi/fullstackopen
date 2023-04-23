import React from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <section>
      {text[0].toUpperCase() + text.slice(1)} {value}
    </section>
  );
};

export default StatisticLine;
