import React from "react";
import { SettingsProvider } from "./providers/SettingsProvider";
import App from "./App";

const AppWrapper = () => {
  return (
    <SettingsProvider>
      <App />
    </SettingsProvider>
  );
};

export default AppWrapper;
