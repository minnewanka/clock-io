import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../providers/UserProvider";

const Settings: React.FC = () => {
  const { settings, setSettings } = useContext(UserContext);
  const { t } = useTranslation();
  const [range, setRange] = useState(settings.range);
  const [latitude, setLatitude] = useState(settings.latitude);
  const [longitude, setLongitude] = useState(settings.longitude);

  return (
    <div>
      <h1>{t("settings.title")}</h1>
      <input
        type="range"
        min="5"
        max="20"
        value={range}
        step="1"
        onChange={(event) => setRange(Number(event.target.value))}
      />
      <input
        type="number"
        name="latitude"
        value={latitude}
        onChange={(event) => setLatitude(Number(event.target.value))}
      />
      <input
        type="number"
        name="longitude"
        value={longitude}
        onChange={(event) => setLongitude(Number(event.target.value))}
      />
      <button
        type="submit"
        onClick={() => {
          setSettings({ range, latitude, longitude });
        }}
      >
        {t("settings.save")}
      </button>
    </div>
  );
};

export default Settings;
