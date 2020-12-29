import { render, fireEvent } from "@testing-library/react";

import Login from "./SignIn";

describe("Login page test", () => {
  it("should be able to add texts to form", () => {
    const { getByText, getByLabelText } = render(<Login />);

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "Some username" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "Some password" },
    });
    fireEvent.click(getByText("Login"));

    expect(getByLabelText("Username")).toHaveValue("");
    expect(getByLabelText("Password")).toHaveValue("");
  });
});
