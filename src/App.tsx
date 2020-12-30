import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "./i18n";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Title>{t("title")}</Title>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("fr")}>FR</button>
      {page === 0 ? <Home /> : <Settings />}
    </div>
  );
};

export default App;
