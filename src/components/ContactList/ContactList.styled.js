import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 450px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  line-height: 1.15;
  padding: 10px 0;
  letter-spacing: 0.05em;
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
