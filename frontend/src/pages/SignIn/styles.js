import styled from "styled-components";

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

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  button {
    width: 8rem;
  }
`;
