import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
describe("Testing the App component", () => {
  test("test case 1", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 5 } });
    fireEvent.change(num2, { target: { value: 7 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("12");
  });
  test("test case 2", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: -5 } });
    fireEvent.change(num2, { target: { value: -3 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("-8");
  });
  test("test case 3", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 10 } });
    fireEvent.change(num2, { target: { value: -4 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("6");
  });
  test("test case 4", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 0 } });
    fireEvent.change(num2, { target: { value: 9 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("9");
  });
  test("test case 5", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 3 } });
    fireEvent.change(num2, { target: { value: 2 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("5");
  });
  test("test case 6", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 1000000 } });
    fireEvent.change(num2, { target: { value: 500000 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("1500000");
  });
  test("test case 7", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: 2.5 } });
    fireEvent.change(num2, { target: { value: 1.75 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("4.25");
  });
  test("test case 8", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: -7 } });
    fireEvent.change(num2, { target: { value: 7 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("0");
  });
  test("test case 9", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: Number.MAX_SAFE_INTEGER } });
    fireEvent.change(num2, { target: { value: 1 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("overflow");
  });
  test("test case 10", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: Number.MIN_SAFE_INTEGER } });
    fireEvent.change(num2, { target: { value: -1 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe("underflow");
  });
  test("test case 11", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: null } });
    fireEvent.change(num2, { target: { value: 5 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe(
      "Error invalue input!!!"
    );
  });
  test("test case 12", () => {
    render(<App />);
    const num1 = screen.getByTestId("num-1");
    const num2 = screen.getByTestId("num-2");
    const button = screen.getByTestId("calculate");
    fireEvent.change(num1, { target: { value: "hello" } });
    fireEvent.change(num2, { target: { value: 3 } });
    fireEvent.click(button);
    expect(screen.getByTestId("result").innerHTML).toBe(
      "Error invalue input!!!"
    );
  });
});
