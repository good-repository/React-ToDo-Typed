import React from "react";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <h2 style={{ color: "#fff" }}>
        This app has been developed by{" "}
        <a style={{ color: "#bbb" }} href="https://good-repository.github.io/">
          Guilherme Fünkler Borelli
        </a>
      </h2>
    </div>
  );
}
