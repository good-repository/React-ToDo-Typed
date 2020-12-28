import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleFormSubmit() {
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleFormSubmit}>
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

        <button type="submit">Login</button>
        <button onClick={() => {}}>Register</button>
      </form>
    </div>
  );
}
