import React, { useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";

const Title = styled.h2`
  text-align: center;
  color: black;
`;

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: 5px;
  padding: 1rem 2rem;
  max-height: 400px;
  overflow: scroll;
  margin: 1rem;
`;

const ClockinEntry = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
`;
const SubEntry = styled.div`
  display: flex;
  justify-content: space-between;
`;
const List = styled.div`
  list-style-type: none;
`;

const Date = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
`;
const Address = styled.div`
  font-size: 0.8rem;
`;
const Type = styled.span<{ type: string }>`
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  width 4rem;
  border: 2px solid black;
  background-color: ${(props) =>
    props.type === "in" ? props.theme.colors.green : props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white}
`;

const ClockingHistory: React.FC = () => {
  const { clockingEntries } = useContext(UserContext);
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("clockingHistory.title")}</Title>
      <List>
        {clockingEntries.map((entry, index) => (
          <ClockinEntry>
            <SubEntry>
              <Date>{entry.date}</Date>
              <Type type={entry.type}>
                {entry.type === "in" ? "Clock in" : "Clock out"}
              </Type>
            </SubEntry>
            <div>
              <Address>{entry.address}</Address>
            </div>
          </ClockinEntry>
        ))}
      </List>
    </Container>
  );
};

export default ClockingHistory;
