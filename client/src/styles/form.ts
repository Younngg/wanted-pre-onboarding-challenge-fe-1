import styled from 'styled-components';

export const Form = styled.form`
  margin: auto;
`;

export const ValidationInput = styled.input<{ isValid: boolean }>`
  width: 20rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;

  &:focus {
    outline-color: ${({ isValid, theme }) =>
      isValid ? theme.color.green : theme.color.red};
  }
`;

export const Input = styled.input`
  width: 20rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 20rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const ValidationMessage = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  align-self: flex-end;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  width: 8rem;
`;

export const Button = styled.button<{ color?: string }>`
  padding: 0 1.5rem;
  height: 4rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  border: 2px solid
    ${({ theme, color }) => (color ? theme.color[color] : theme.color.green)};
  border-radius: 50px;
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.green};
  background-color: white;

  &:hover {
    background-color: ${({ theme, color }) =>
      color ? theme.color[color] : theme.color.green};
    color: white;
  }

  &:disabled {
    border: 2px solid lightgrey;
    background-color: lightgrey;
    color: white;
  }
`;
