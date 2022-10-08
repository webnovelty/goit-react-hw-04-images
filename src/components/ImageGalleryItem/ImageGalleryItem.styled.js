import styled from '@emotion/styled';
export const Img = styled.img`
 max-width: 100%;
  display: block;
`;

export const Card = styled.li`
width: calc((100% - 60px) / 4);
margin-right: 10px;
margin-bottom: 10px;
  list-style-type: none;
 &:nth-child(4n){
	margin-right: 0;
  }
  &:nth-last-child(-n+4){
	margin-bottom: 0;
  }
`;