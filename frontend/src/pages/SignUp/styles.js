import styled from "styled-components";

import { darken } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;

  @media (max-width: 568px) {
    width: 20rem;
  }

  label {
    margin-left: -65%;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  input {
    width: 80%;
  }
`;

export const ButtonCointainer = styled.div`
  width: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  button {
    width: 8rem;
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#3b9eff")};
    }
  }

  a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
`;
