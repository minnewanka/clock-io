import React, { useState, useContext } from "react";
import styled from "styled-components";
import { usePosition } from "../hooks/postion";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";
import { haversineDistance } from "../utils/function";
import Button from "./Button";

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.colors.lightgrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin: 1rem;
`;

const Text = styled.div`
  margin: 1rem;
  font-size: 1.2em;
`;

interface Position {
  latitude: number;
  longitude: number;
}

const GPS: React.FC = () => {
  const { gps, setGps, settings, setSettings } = useContext(UserContext);
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  const onSuccess = ({ coords }: { coords: Position }) => {
    const distance = haversineDistance(
      coords.latitude,
      coords.longitude,
      settings.latitude,
      settings.longitude
    );
    setGps({
      isActived: true,
      latitude: coords.latitude,
      longitude: coords.longitude,
      distance: Math.round(distance * 10) / 10,
    });
  };
  const onError = () => {
    setHasError(true);
  };

  const activate = () =>
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  return (
    <Container>
      <h2>{t("gps.currentPosition")}</h2>
      <div>Latitude: {gps.latitude === 0 ? "?" : gps.latitude}</div>
      <div>Longitude: {gps.longitude === 0 ? "?" : gps.longitude}</div>
      {hasError && t("gps.error")}
      <Text>
        {gps.isActived
          ? gps.distance && gps.distance < settings.range
            ? t("gps.arrived")
            : t("gps.outofrange", { distance: gps.distance })
          : null}
      </Text>
      {!gps.isActived && (
        <Button type="button" label="Activate GPS" onClick={activate} />
      )}
    </Container>
  );
};

export default GPS;
