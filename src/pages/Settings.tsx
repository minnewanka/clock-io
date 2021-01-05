import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";
import Button from "../components/Button";

const Section = styled.div`
  background-color: ${(props) => props.theme.colors.lightblue};
  margin: 2rem;
  padding: 1rem 2rem 2rem 2rem;
`;

const Input = styled.input`
  border-radius: 3rem;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.blue};
`;

const Label = styled.label`
  display: inline-block;
  min-width: 100px;
`;

const Div = styled.div`
  margin: 1rem;
`;

const Range = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 8px;
  margin-left: 1rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const Settings: React.FC = () => {
  const { settings, setSettings } = useContext(UserContext);
  const { t } = useTranslation();
  const [range, setRange] = useState(settings.range);
  const [latitude, setLatitude] = useState(settings.latitude);
  const [longitude, setLongitude] = useState(settings.longitude);

  return (
    <>
      <h1>{t("settings.title")}</h1>
      <Section>
        <h2>{t("settings.subtitle.range")}</h2>
        <Label htmlFor="range">{t("settings.label.range")}</Label>
        <input
          id="range"
          type="range"
          min="5"
          max="20"
          value={range}
          step="1"
          onChange={(event) => setRange(Number(event.target.value))}
        />
        <Range>{range}</Range>
      </Section>
      <Section>
        <h2>{t("settings.subtitle.location")}</h2>
        <Div>
          <Label htmlFor="latitude">{t("settings.label.latitude")}</Label>
          <Input
            id="latitude"
            type="number"
            name="latitude"
            value={latitude}
            onChange={(event) => setLatitude(Number(event.target.value))}
          />
        </Div>
        <Div>
          <Label htmlFor="longitude">{t("settings.label.longitude")}</Label>
          <Input
            id="longitude"
            type="number"
            name="longitude"
            value={longitude}
            onChange={(event) => setLongitude(Number(event.target.value))}
          />
        </Div>
      </Section>
      <Row justify="center">
        <Button
          type="submit"
          onClick={() => {
            setSettings({ range, latitude, longitude });
          }}
          label={t("settings.save")}
        />
      </Row>
    </>
  );
};

export default Settings;
