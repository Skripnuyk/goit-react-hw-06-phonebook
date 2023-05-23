import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  border: 1px solid black;
  width: 450px;
  display: block;
  padding: 15px;
  margin: 0;
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  display: flex;
  width: 300px;
  outline: none;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.15;
  
  :focus, :hover {
    border-color: #0084ff;
`;

export const Button = styled.button`
  width: 120px;
  padding: 5px;
  border-radius: 4px;
  border: none;
  color: #010101;
  background-color: #f1f1f1;

  :focus,
  :hover {
    color: antiquewhite;
    background-color: #0084ff;
  }
`;
