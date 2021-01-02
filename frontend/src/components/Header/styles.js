import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    h4 {
      margin-right: 3rem;
      color: #7159c1;
    }

    a {
      font-weight: bold;
      color: #7159c1;
      padding: 0 2rem;
    }
  }
  aside {
    display: flex;
    align-items: center;
    padding-right: 2rem;

    button {
      width: 8rem;
      margin: 5px 0 0;
      height: 44px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
    }
  }
`;
