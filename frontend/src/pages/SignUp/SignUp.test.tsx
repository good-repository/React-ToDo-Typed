import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import SignUp from "./SignUp";

const history = createMemoryHistory();

describe("Login page test", () => {
  it("should be able to add texts to form", () => {
    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <SignUp />
      </Router>
    );

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "Some username" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "Some password" },
    });
    fireEvent.click(getByText("Register now"));

    expect(getByLabelText("Username")).toHaveValue("");
    expect(getByLabelText("Password")).toHaveValue("");
  });
});
