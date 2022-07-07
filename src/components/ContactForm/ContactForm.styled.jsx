import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormEl = styled(Form)`
  margin-bottom: 32px;
  border: 2px dotted;
  padding: 16px;
  width: 380px;
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  gap: 4px;
`;
export const Input = styled(Field)`
  width: 100%;
  font-size: 14px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
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
