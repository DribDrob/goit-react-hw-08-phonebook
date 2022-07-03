import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 32px;
  border: 2px dotted;
  padding: 16px;
  width: 380px;
`;
export const Label = styled.label`
  display: flex;
  margin-bottom: 8px;
  > span {
    margin-right: 8px;
  }
`;
export const Input = styled.input`
  width: 100%;
  font-size: 14px;
`;
export const Button = styled.button`
  padding: 4px 16px;
  cursor: pointer;
  font-family: inherit;
  color: white;
  background-color: #6fa7f0;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border: 0;
  border-radius: 4px;
`;
