import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { UserContext } from "../providers/UserProvider";

const Div = styled.div<{ isClockIn: boolean }>`
  box-sizing: content-box;
  height: 20em;
  width: 20em;
  line-height: 20em;
  margin: auto;
  background-color: ${(props) =>
    props.isClockIn ? props.theme.colors.blue : props.theme.colors.green};
  border-radius: 50%;
  text-align: center;
  text-transform: uppercase;
  border: 5px solid ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 5px ${(props) =>
    props.isClockIn ? props.theme.colors.blue : props.theme.colors.green};
}
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
