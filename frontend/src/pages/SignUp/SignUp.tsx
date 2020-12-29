import { useState } from "react";
import { useAuth } from "../../store/context/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ButtonCointainer, Form } from "./styles";
import { sign } from "crypto";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();

  function handleFormSubmit() {
    setUsername("");
    setPassword("");
    toast.success("Successful Registration! Redirecting to Dashboard...");
    signIn();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "#fff", fontSize: "2rem" }}>Registration</h3>
      <Form data-testid="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </Form>

      <ButtonCointainer>
        <button onClick={handleFormSubmit}>Register now</button>
        <Link to="/">Back</Link>
      </ButtonCointainer>
    </div>
  );
}
