import styled from '@emotion/styled';
import { Field, Form } from 'formik';
export const SearchForm = styled(Form)`

 display: flex;
 justify-content: center;
  margin: 10px;
`;

export const Input = styled(Field)`


  font-size: 50px;
  border-radius: 10px;
  padding-left: 10px;
`;

export const Span = styled.span`
cursor: pointer;
font-size: 25px;
`;

export const Button = styled.button`
margin-right: 20px;
padding: 12px 48px;
  border-radius: 24px;
  background-color: #0076ff;
  box-shadow: 0px 4px 10px rgba(135, 167, 171, 0.5);
  font-size: 14px;
  color: white;
  font-weight: 500;
  text-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  cursor: pointer;
`;

export const Header = styled.header`
padding: 40px 0 40px 0;
box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
`;