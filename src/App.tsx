import React, { useState, useContext } from "react";
import { Container, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import i18n from "./i18n";

const LanguageButton = styled.button<{ isActive: boolean }>`
background: none;
color: ${(props) => (props.isActive ? "black" : "lightgrey")};
border: none;
padding: 0;
font: 2rem;
cursor: pointer;
outline: inherit;
margin: 0.5rem;
}
`;

const ToolBox = styled(Row)`
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
  background-colors: ${(props) => props.theme.colors.lightblue};
`;

const ClickableIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const getLanguage = () => {
    return i18n.language;
  };
  return (
    <StyledContainer className="App">
      <Title>{t("title")}</Title>
      <ToolBox justify="end">
        <ClickableIcon
          data-testid="page-icon"
          onClick={() => (page === 1 ? setPage(0) : setPage(1))}
        >
          {page === 0 ? (
            <i className="fa fa-2x fa-cog"></i>
          ) : (
            <i className="fa fa-2x fa-arrow-left"></i>
          )}
        </ClickableIcon>
        <LanguageButton
          isActive={getLanguage() === "en"}
          onClick={() => changeLanguage("en")}
        >
          EN
        </LanguageButton>
        <LanguageButton
          isActive={getLanguage() === "fr"}
          onClick={() => changeLanguage("fr")}
        >
          FR
        </LanguageButton>
      </ToolBox>
      {page === 0 ? <Home /> : <Settings />}
    </StyledContainer>
  );
};

export default App;
