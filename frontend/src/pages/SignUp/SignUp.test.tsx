import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { renderHook } from "@testing-library/react-hooks";

import { useAuth } from "../../store/context/auth";
import { createMemoryHistory } from "history";

import SignUp from "./SignUp";

const history = createMemoryHistory();
describe("Registration page test", () => {
  it("should be able to add texts to form and login", () => {
    const { result } = renderHook(() => useAuth());
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
    expect(result.current.signIn).toBeCalled();
  });
});
