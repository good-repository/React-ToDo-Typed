import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

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

export const Form = styled.form`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding-left: 10px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  border-bottom: 1px solid white;
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;
