import React from "react";
import { I18nextProvider } from "react-i18next";
import {
  render,
  screen,
  fireEvent,
  getByText,
  getByTestId,
} from "@testing-library/react";
import Theme from "./theme";
import AppWrapper from "./AppWrapper";

test("renders learn react link", () => {
  render(<AppWrapper />);
  const linkElement = screen.getByText("title");
  expect(linkElement).toBeInTheDocument();
});

test("it goes to Settings", () => {
  render(<AppWrapper />);
  fireEvent.click(screen.getByTestId("page-icon"));
  const settingsElement = screen.getByText("settings.title");
  expect(settingsElement).toBeInTheDocument();
});
