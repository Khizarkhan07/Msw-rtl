import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import Users from "./Users";

const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
  Object.defineProperty(window, "matchMedia", {
    value: () => {
      return {
        matches: false,
        addListener: () => jest.fn(),
        removeListener: () => jest.fn(),
      };
    },
  });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Loader is shown when data is being loaded", () => {
  render(<Users />);
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeInTheDocument();
});

test("Users are renders after api response", async () => {
  render(<Users />);
  const userList = await screen.findAllByTestId("list-item");
  expect(userList).toHaveLength(12);
});
