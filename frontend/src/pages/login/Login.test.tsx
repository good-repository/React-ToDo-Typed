import { render, fireEvent } from "@testing-library/react";

import Login from "./Login";

describe("Login page test", () => {
  it("should be able to add texts to form", () => {
    const { getByText, getByTestId, getByLabelText } = render(<Login />);

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "Some username" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "Some password" },
    });
    // fireEvent.submit(getByTestId("login-form"));
    fireEvent.click(getByText("Login"));

    expect(getByLabelText("Username")).toHaveValue("");
    expect(getByLabelText("Password")).toHaveValue("");
  });
});
