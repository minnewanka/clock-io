import React, { Context, createContext, useState, useEffect } from "react";

const UserContext: Context<UserContext> = createContext({} as UserContext);

export interface Settings {
  range: number;
  latitude: number;
  longitude: number;
}
interface UserContext {
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

const UserProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <UserContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
