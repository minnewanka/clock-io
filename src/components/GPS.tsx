import React, { useState, useContext } from "react";
import { usePosition } from "../hooks/postion";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";
import { haversineDistance } from "../utils/function";

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
    <div>
      <div>Latitude: {gps.latitude}</div>
      <div>Longitude: {gps.longitude}</div>
      {hasError && t("gps.error")}
      {gps.distance && gps.distance < settings.range
        ? t("gps.arrived")
        : t("gps.outofrange", {})}
      {!gps.isActived && (
        <button type="button" onClick={activate}>
          Enable GPS
        </button>
      )}
    </div>
  );
};

export default GPS;
