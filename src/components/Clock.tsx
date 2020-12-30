import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return <div>{format(date, "HH:mm aaaa")}</div>;
};

export default Clock;
