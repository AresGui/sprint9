import styled from 'styled-components';

export const ImageContainer = styled.img`
margin-right: 20px;
`;

export const StyledRow = styled.div`
 display: flex;
  flex-wrap: nowrap;
  border: red solid 2px;
   overflow-x: hidden;
    padding-left: 50px; 
 `;

export const BigContainer = styled.div`
 max-width: 100%;
 position: relative;
 font-family: 'Narnoor', serif;
  border: purple solid 2px;
  margin: 20px;
 `

export const LeftArrow = styled.div`
  position: absolute;
    top: 50%; 
    left: 0; 
    z-index: 1; 
`;

export const RightArrow = styled.div`
  position: absolute;
    top: 50%; 
    right: 0; 
    z-index: 1; 
`;
