import styled from '@emotion/styled';
export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Card = styled.li`
width: calc((100% - 60px) / 4);
margin-right: 10px;
margin-bottom: 10px;
  list-style-type: none;
 &:nth-of-type(4n){
	margin-right: 0;
  }
  &:nth-last-of-type(-n+4){
	margin-bottom: 0;
  }
`;