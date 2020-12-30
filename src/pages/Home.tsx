import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { UserContext } from "../providers/UserProvider";
import Clock from "../components/Clock";
import GPS from "../components/GPS";
import ClockingHistory from "../components/ClockingHistory";

const Home: React.FC = () => {
  const { gps, settings, clockingEntries, setClockingEntries } = useContext(
    UserContext
  );
  const [isClockIn, setIsClockIn] = useState(true);
  const { t } = useTranslation();

  const fetchAPI = (latitude: number, longitude: number) => {
    const token =
      "pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q";
    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude.toPrecision(
        9
      )},${latitude.toPrecision(9)}.json?access_token=${token}`
    );
  };

  let label = "";
  if (!gps.distance || (gps.distance && gps.distance > settings.range)) {
    label = t("outofrange");
  } else {
    label = isClockIn ? t("clockin") : t("clockout");
  }

  const handleOnClick = () => {
    fetchAPI(gps.latitude, gps.longitude)
      .then((response) => response.json())
      .then((data) => {
        const address = data.features[0].properties.address;
        const date = format(new Date(), "dd/MM @ HH:mm aaaa");
        setClockingEntries([...clockingEntries, { type: "in", date, address }]);
      });
  };

  return (
    <div>
      <Clock />
      <GPS />
      <ClockingHistory />
      <button type="button" onClick={handleOnClick}>
        {label}
      </button>
    </div>
  );
};

export default Home;
