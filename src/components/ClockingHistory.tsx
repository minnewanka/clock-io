import React, { useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #0a61f7;
`;

const Container = styled.div`
  border: 2px solid #0a61f7;
  border-radius: 5px;
  padding: 5px;
`;
const List = styled.ul`
  list-style-type: none;
`;

const ClockingHistory: React.FC = () => {
  const { clockingEntries } = useContext(UserContext);
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("clockingHistory.title")}</Title>
      <List>
        {clockingEntries.map((entry, index) => (
          <li key={`clockingEntries${index}`}>
            {entry.date}
            {entry.address}
            {entry.type}
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ClockingHistory;
