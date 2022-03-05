import React from "react";
import {
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders Login Text", () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const loginText = screen.queryByText("Login");
  expect(loginText).toBeInTheDocument();
});

test("Shows validation error for email field", async () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const emailInput = screen.getByTestId("email-input-field");
  fireEvent.change(emailInput, { target: { value: "wrong email" } });
  fireEvent.blur(emailInput);
  const validationError = await screen.findByText("Invalid Email");
  expect(validationError).toBeInTheDocument();
  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.blur(emailInput);
  const requiredValidationError = await screen.findByText(
    "email is a required field"
  );
  expect(requiredValidationError).toBeInTheDocument();
});

test("Shows validation error for password field", async () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const passwordInput = screen.getByTestId("password-input-field");
  fireEvent.change(passwordInput, { target: { value: "abc" } });
  fireEvent.blur(passwordInput);
  await screen.findByText("Password must be 8 characters");
  fireEvent.change(passwordInput, { target: { value: "" } });
  fireEvent.blur(passwordInput);
  await screen.findByText("password is a required field");
});

test("Login button is disabled when validation is failed", async () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const passwordInput = screen.getByTestId("password-input-field");
  fireEvent.change(passwordInput, { target: { value: "abc" } });
  fireEvent.blur(passwordInput);
  const loginButton = screen.getByRole("login-button");
  expect(loginButton).toHaveAttribute("disabled");
});

test("Does show error on incorrect credentials", async () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const passwordInput = screen.getByTestId("password-input-field");
  fireEvent.change(passwordInput, { target: { value: "KhizarKhan" } });
  fireEvent.blur(passwordInput);
  const emailInput = screen.getByTestId("email-input-field");
  fireEvent.change(emailInput, { target: { value: "khizar.khan@emumba.com" } });
  fireEvent.blur(emailInput);
  const loginButton = screen.getByRole("login-button");
  userEvent.click(loginButton);
  await screen.findByText("Invalid Credentials");
});

test("Does not show error on correct credentials", async () => {
  render(
    <Router>
      <Routes location={"/login"}>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  const passwordInput = screen.getByTestId("password-input-field");
  fireEvent.change(passwordInput, { target: { value: "Khizar123" } });
  fireEvent.blur(passwordInput);
  const emailInput = screen.getByTestId("email-input-field");
  fireEvent.change(emailInput, { target: { value: "khizar.khan@emumba.com" } });
  fireEvent.blur(emailInput);
  const loginButton = screen.getByRole("login-button");
  userEvent.click(loginButton);
  await waitFor(() =>
    expect(screen.queryByText("Invalid Credentials")).not.toBeInTheDocument()
  );
});
