import React, { Context, createContext, useState, useEffect } from "react";

const SettingsContext: Context<SettingsContext> = createContext(
  {} as SettingsContext
);

export interface Settings {
  range: number;
  latitude: number;
  longitude: number;
}
interface SettingsContext {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

const initialSettings = {
  range: 5,
  latitude: 127.0324052,
  longitude: 37.4997864,
};

const initialState =
  JSON.parse(localStorage.getItem("settings") as string) || initialSettings;

const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
