import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import RegForm from "./component/RegForm";
describe("Form Validation", () => {
  test("Email id validation", () => {
    render(<App />);
    const addBtn = screen.getByTestId("add-btn");
    fireEvent.click(addBtn);
    const emailId = screen.getByTestId("emailId");
    const submit = screen.getByTestId("submit");

    // test case 1
    fireEvent.change(emailId, { target: { value: "" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("emailid-error-msg").innerHTML).toBe(
      "Email id is required!"
    );

    // test case 2
    fireEvent.change(emailId, { target: { value: "asakthivel@gmail.com" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("emailid-error-msg").innerHTML).toBe("");

    // test case 3
    fireEvent.change(emailId, { target: { value: "asakthivel" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("emailid-error-msg").innerHTML).toBe(
      "Invalid email id!"
    );
  });

  test("FirstName validation", () => {
    render(<App />);
    const emailId = screen.getByTestId("emailId");
    const firstName = screen.getByTestId("firstname");
    const submit = screen.getByTestId("submit");
    fireEvent.change(emailId, { target: { value: "asakthivel@gmail.com" } });

    // test case 1
    fireEvent.change(firstName, { target: { value: "" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("firstname-error-msg").innerHTML).toBe("First Name is required!");

    // test case 2
    fireEvent.change(firstName, { target: { value: "123" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("firstname-error-msg").innerHTML).toBe("Only alphabets to be entered!");

    // test case 3
    fireEvent.change(firstName, { target: { value: "Sakthivel123" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("firstname-error-msg").innerHTML).toBe("Only alphabets to be entered!");

    // test case 4
    fireEvent.change(firstName, { target: { value: "Sakthivel" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("firstname-error-msg").innerHTML).toBe("");
  });

  test("LastName validation", () => {
    render(<App />);
    const emailId = screen.getByTestId("emailId");
    const firstName = screen.getByTestId("firstname");
    const lastName = screen.getByTestId("lastname");
    const submit = screen.getByTestId("submit");
    fireEvent.change(emailId, { target: { value: "asakthivel@gmail.com" } });
    fireEvent.change(firstName, { target: { value: "Sakthivel" } });

    // Test case 1
    fireEvent.change(lastName, { target: { value: "" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("Last Name is required!");

    // Test case 2
    fireEvent.change(lastName, { target: { value: "123" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("Only alphabets to be entered!");

    // Test case 3
    fireEvent.change(lastName, { target: { value: "asakthivel123" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("Only alphabets to be entered!");

    // Test case 4
    fireEvent.change(lastName, { target: { value: "A" } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("");
  });

  test("DOB validation", () => {
    render(<App />);
    const emailId = screen.getByTestId("emailId");
    const firstName = screen.getByTestId("firstname");
    const lastName = screen.getByTestId("lastname");
    const dob = screen.getByTestId("dob");
    const submit = screen.getByTestId("submit");
    fireEvent.change(emailId, { target: { value: "asakthivel@gmail.com" } });
    fireEvent.change(firstName, { target: { value: "Sakthivel" } });
    fireEvent.change(lastName, { target: { value: "A" } });

    const obj = new Date();
    let date;
    // Test case 1
    date = obj.getFullYear() + "-" + (obj.getMonth()+"").padStart(2,"0") + "-" + ((obj.getDate()+"").padStart(2,"0"));
    fireEvent.change(dob, { target: { value: date } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("");

    // Test case 2
    date = obj.getFullYear() + "-" + (obj.getMonth()+"").padStart(2,"0") + "-" + ((Number(obj.getDate() - 1)+"").padStart(2,"0"));
    fireEvent.change(dob, { target: { value: date } });
    fireEvent.click(submit);
    expect(screen.getByTestId("lastname-error-msg").innerHTML).toBe("");
  });

  test("LastName validation", () => {
    render(<App />);
    const date = obj.getFullYear() + "-" + (obj.getMonth()+"").padStart(2,"0") + "-" + ((obj.getDate()+"").padStart(2,"0"));
    const obj = new Date();
    const emailId = screen.getByTestId("emailId");
    const firstName = screen.getByTestId("firstname");
    const lastName = screen.getByTestId("lastname");
    const dob = screen.getByTestId("dob");
    // const dob = screen.getByTestId("dob");
    const submit = screen.getByTestId("submit");
    fireEvent.change(emailId, { target: { value: "asakthivel@gmail.com" } });
    fireEvent.change(firstName, { target: { value: "Sakthivel" } });
    fireEvent.change(lastName, { target: { value: "A" } });
    fireEvent.change(dob, { target: { value: date } });


  });
});
