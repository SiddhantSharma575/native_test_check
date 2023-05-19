import "react-native";
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import SecondElement from "../components/SecondElement";

describe("Button", () => {
  // check button is present or not
  it("Check Button Availablity", () => {
    const { getByText } = render(<SecondElement />);
    const ele = getByText("Click");
    expect(ele).toBeDefined();
  });
  //   Button Presses checked
  it("should call on press handler when clicked", () => {
    const { getByTestId } = render(<SecondElement />);
    const Button = getByTestId("btn");
    const handleCickMock = jest.spyOn(SecondElement.prototype, "handleClick");
    fireEvent.press(Button);
    expect(handleCickMock).toHaveBeenCalled();
  });

  test('should log "Button Clicked" when the button is pressed', () => {
    const consoleWarnMock = jest.spyOn(console, "warn");
    consoleWarnMock.mockImplementation(() => {});

    const { getByTestId } = render(<SecondElement />);
    const button = getByTestId("btn");

    fireEvent.press(button);

    expect(consoleWarnMock).toHaveBeenCalledWith("Button Clicked");

    consoleWarnMock.mockRestore();
  });
});
