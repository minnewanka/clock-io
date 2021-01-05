import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { UserContext } from "../providers/UserProvider";
import Clock from "../components/Clock";
import GPS from "../components/GPS";
import Button from "../components/Button";
import ClockingHistory from "../components/ClockingHistory";

const StyledButton = styled(Button)<{ isClockIn: boolean }>`
  background-color: ${(props) =>
    props.isClockIn ? props.theme.colors.green : props.theme.colors.orange};
`;

const Home: React.FC = () => {
  const {
    gps,
    settings,
    clockingEntries,
    setClockingEntries,
    isClockIn,
    setIsClockIn,
  } = useContext(UserContext);
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

  const isOutOfRange =
    !gps.distance || (gps.distance && gps.distance > settings.range);

  let label = "";
  if (isOutOfRange) {
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
        setClockingEntries([
          { type: isClockIn ? "in" : "out", date, address },
          ...clockingEntries,
        ]);
      });
    setIsClockIn(!isClockIn);
  };

  return (
    <>
      <Row align="center">
        <Col>
          <GPS />
        </Col>
        <Col>
          <Clock />
        </Col>
        <Col>
          <ClockingHistory />
        </Col>
      </Row>
      <Row justify="center">
        <StyledButton
          isClockIn={isClockIn}
          label={label}
          type="button"
          onClick={handleOnClick}
          disabled={isOutOfRange || false}
        />
      </Row>
    </>
  );
};

export default Home;
