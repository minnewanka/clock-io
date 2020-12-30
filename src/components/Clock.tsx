import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { UserContext } from "../providers/UserProvider";

const Div = styled.div<{ isClockIn: boolean }>`
  height: 20em;
  width: 20em;
  line-height: 20em;
  background-color: ${(props) => (props.isClockIn ? "#0a61f7" : "green")};
  border-radius: 50%;
  text-align: center;
`;

const Text = styled.span`
  font-size: 42px;
  color: white;
`;

const Clock: React.FC = () => {
  const { isClockIn } = useContext(UserContext);
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

  return (
    <Div isClockIn={isClockIn}>
      <Text>{format(date, "HH:mm aaaa")}</Text>
    </Div>
  );
};

export default Clock;
