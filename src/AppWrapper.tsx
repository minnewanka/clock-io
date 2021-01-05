import React from "react";
import { UserProvider } from "./providers/UserProvider";
import Theme from "./theme";
import App from "./App";

const AppWrapper = () => {
  return (
    <Theme>
      <UserProvider>
        <App />
      </UserProvider>
    </Theme>
  );
};

export default AppWrapper;
