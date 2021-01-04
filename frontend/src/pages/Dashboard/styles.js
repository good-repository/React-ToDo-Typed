import styled from "styled-components";

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 10px;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.7;
  }

  :first-child {
    margin-left: 0;
  }
`;
