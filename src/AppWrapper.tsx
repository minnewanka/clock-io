import React from "react";
import { UserProvider } from "./providers/UserProvider";
import App from "./App";

const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default AppWrapper;
