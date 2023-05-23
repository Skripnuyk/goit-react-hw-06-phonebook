import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const FindInput = styled.input`
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
