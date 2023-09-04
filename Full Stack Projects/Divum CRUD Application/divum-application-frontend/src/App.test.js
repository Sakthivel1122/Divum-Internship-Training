import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import RegForm from "./component/RegForm";

test("Email validation", () => {
  render(<App />);
  render(<RegForm />);
  const emailid = screen.getByTestId("emailid");
  const submit = screen.getByTestId("submit");
  fireEvent.change(emailid, { target: { value: "asakthivel@gmail.com" } });
  fireEvent.click(submit);
});
