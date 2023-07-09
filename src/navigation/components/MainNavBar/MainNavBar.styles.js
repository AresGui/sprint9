import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    font-size: 18px;
    /* overflow: hidden; */
    background: rgba(0, 0, 0, 0.0);
    display: flex;
    justify-content: space-between;
    height: auto;
    align-items: center;
    padding: 10px;

 @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
 }
`;

export const Logo = styled.a`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  padding-left: 20px;
 /*  font-weight: bold; */
  color: inherit;
  text-decoration: none;
`;

export const LinksContainer = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center !important;
   margin: 0;


   @media (max-width: 560px) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')} !important;
      flex-direction: column;
      width: 100%;
      margin: 0;
   }
`;

export const Li = styled.li`
   list-style: none;
   padding: 10px 20px;
   border-radius: 5px;
      &:hover {
      background-color: #a38e8e;
      }

      @media (max-width: 560px) {
      display: flex;
      width: 100%;
      text-align: center;
      padding: none;
      &:hover {
      background-color: #a38e8e;
      }
 }
`;

export const StyledLink = styled.a`
  text-decoration: none;
   font-family: 'Bebas Neue', sans-serif;
   font-size: 2.0rem;
  color: white;
  display: block;
  width: 100%; 
  box-sizing: border-box;

`;

export const ToggleButton = styled.a`
   position:absolute;
   top: 2rem;
   right: 2rem;
   display: none;
   flex-direction: column;
   justify-content: space-between;
   width: 30px;
   height: 21px;
 @media (max-width: 560px) {
   /* display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')} !important;  */
   display: flex;
 }
`;

export const ToggleBar = styled.span`
   height: 3px;
   width: 100%;
   background-color: white;
   border-radius: 10px;
`;
