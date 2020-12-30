import React, { Context, createContext, useState, useEffect } from "react";

const UserContext: Context<UserContext> = createContext({} as UserContext);

export interface Settings {
  range: number;
  latitude: number;
  longitude: number;
}
export interface GPS {
  isActived: boolean;
  latitude: number;
  longitude: number;
}
interface UserContext {
  gps: GPS;
  setGps: (gps: GPS) => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

const initialSettings = {
  range: 5,
  latitude: 0,
  longitude: 0,
};
const initialGPS = {
  isActived: false,
  latitude: 0,
  longitude: 0,
};

const initialState =
  JSON.parse(localStorage.getItem("settings") as string) || initialSettings;

const UserProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(initialState);
  const [gps, setGps] = useState(initialGPS);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <UserContext.Provider
      value={{
        settings,
        setSettings,
        gps,
        setGps,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
