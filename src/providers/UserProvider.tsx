import React, { Context, createContext, useState, useEffect } from "react";

const UserContext: Context<UserContext> = createContext({} as UserContext);

interface ClockingEntry {
  type: string;
  date: string;
  address: string;
}

export interface Settings {
  range: number;
  latitude: number;
  longitude: number;
}
export interface GPS {
  distance?: number;
  isActived: boolean;
  latitude: number;
  longitude: number;
}
interface UserContext {
  gps: GPS;
  clockingEntries: ClockingEntry[];
  setGps: (gps: GPS) => void;
  settings: Settings;
  setSettings: (settings: Settings) => void;
  setClockingEntries: (entries: ClockingEntry[]) => void;
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

const initialSettingsState =
  JSON.parse(localStorage.getItem("settings") as string) || initialSettings;

const initialEntriesState =
  JSON.parse(localStorage.getItem("clockingEntries") as string) || [];

const UserProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(initialSettingsState);
  const [clockingEntries, setClockingEntries] = useState<ClockingEntry[]>(
    initialEntriesState
  );
  const [gps, setGps] = useState(initialGPS);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("clockingEntries", JSON.stringify(clockingEntries));
  }, [clockingEntries]);

  return (
    <UserContext.Provider
      value={{
        settings,
        setSettings,
        gps,
        setGps,
        clockingEntries,
        setClockingEntries,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
