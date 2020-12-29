import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "./styles";
import { useAuth } from "../../store/context/auth";

export default function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();

  function handleFormSubmit() {
    signIn();
    setUsername("");
    setPassword("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "4rem" }}>ToDo App</h1>
      <Form data-testid="login-form" onSubmit={handleFormSubmit}>
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

        <div>
          <button type="submit">Login</button>
          <Link to="/register">Don't have an account?</Link>
        </div>
      </Form>
    </div>
  );
}
