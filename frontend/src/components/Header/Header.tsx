import React from "react";
import { Link } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";
import { useAuth } from "../../store/context/auth";

import { Container, Content } from "./styles";

function Header() {
  const { signOut } = useAuth();
  function handleClick() {
    signOut();
  }

  return (
    <Container>
      <Content>
        <nav>
          <h4>
            <FaCheckDouble /> Todo App
          </h4>
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
        <aside>
          <button onClick={handleClick}>Exit</button>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
