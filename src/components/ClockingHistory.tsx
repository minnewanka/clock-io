import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const ClockingHistory: React.FC = () => {
  const { clockingEntries } = useContext(UserContext);
  return (
    <div>
      <ul>
        {clockingEntries.map((entry, index) => (
          <li key={`clockingEntries${index}`}>
            {entry.date}
            {entry.address}
            {entry.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClockingHistory;
