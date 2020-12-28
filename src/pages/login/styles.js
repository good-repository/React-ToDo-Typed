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
    height: 2rem;
    width: 80%;
    border: none;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
  }

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  button {
    background: #7159c1;
    color: #fff;
    width: 8rem;
    height: 2.3rem;
    border-radius: 4px;
    border: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#7159c1")};
    }
  }
`;
