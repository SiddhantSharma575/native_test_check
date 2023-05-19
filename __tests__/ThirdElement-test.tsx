import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import ThirdElement from "../components/ThirdElement";
import { Alert } from "react-native";

// Mock the Alert module
jest.mock("react-native", () => ({
  ...jest.requireActual("react-native"),
  Alert: {
    alert: jest.fn(),
  },
}));

describe("ThirdElement", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Should update username when typing", () => {
    const { getByTestId } = render(<ThirdElement />);
    const usernameInput = getByTestId("username-input");
    fireEvent.changeText(usernameInput, "John Doe");
    expect(usernameInput.props.value).toBe("John Doe");
  });
  test("Should update password when typing", () => {
    const { getByTestId } = render(<ThirdElement />);
    const passwordInput = getByTestId("password-input");
    fireEvent.changeText(passwordInput, "Passowrd-123");
    expect(passwordInput.props.value).toBe("Passowrd-123");
  });
  // test("should display error message when username or password is not entered", async () => {
  //   const { getByTestId, getByText } = render(<ThirdElement />);
  //   const loginButton = getByText("Login");

  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(Alert.alert).toHaveBeenCalledWith("Please Enter all Details");
  //   });
  // });

  // test("should display success message when username and password are entered", async () => {
  //   const { getByTestId, getByText } = render(<ThirdElement />);
  //   const usernameInput = getByTestId("username-input");
  //   const passwordInput = getByTestId("password-input");
  //   const loginButton = getByText("Login");

  //   fireEvent.changeText(usernameInput, "JohnDoe");
  //   fireEvent.changeText(passwordInput, "password123");
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(Alert.alert).toHaveBeenCalledWith("Login Successfull");
  //   });
  // });
});
