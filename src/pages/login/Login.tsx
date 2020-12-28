import { useState } from "react";

import { Form } from "./styles";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleFormSubmit() {
    setUsername("");
    setPassword("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#555",
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
          <button onClick={() => {}}>Register</button>
        </div>
      </Form>
    </div>
  );
}
