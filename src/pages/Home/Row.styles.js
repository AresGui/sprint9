import styled from 'styled-components';

export const ImageContainer = styled.img`
margin-right: 20px;
`;

export const StyledRow = styled.div`
 display: flex;
  flex-wrap: nowrap;
   overflow-x: hidden;
 `;

export const BigContainer = styled.div`
 max-width: 100%;
 position: relative;
 font-family: 'Narnoor', serif;
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
