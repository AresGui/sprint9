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

   @media (max-width: 560px) {
    font-size: 2.5rem;
 }
`;

export const LinksContainer = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center !important;
   margin: 0;
   
   @media (max-width: 560px) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')} !important;
      flex-direction: column;
      padding: 0;
      margin: 0;
      width: 100%;   
   }
`;

export const LiLeft = styled.li`
   list-style: none;
   padding: 5px 10px;
   margin: 0 7px;
   border-radius: 10px;
   border: #b2d963 solid 3px;
   
      &:hover {
      background-color: #b2d963;
      }

      @media (max-width: 560px) {
      display: flex;
      width: 100%;
      text-align: center;
      padding: none;
      background-color: none;
      border: #b2d963 solid 3px;
      &:hover {
         background-color: #b2d963;
      }
      }   
      &:hover {
      background-color: #b2d963;
      }
 }
`;

export const LiRight = styled(LiLeft)`
background-color: #b2d963;
      &:hover {
      background-color: none;
      border: #b2d963 solid 3px;
      }

      @media (max-width: 560px) {
         background-color: transparent;
      border: #b2d963 solid 3px;
      &:hover {
         background-color: #b2d963;
      }
      }
`;

export const StyledLink = styled.a`
  text-decoration: none;
   font-family: 'Narnoor', serif;
   font-size: 1.5rem;
  color: white;
  display: block;
  width: 100%; 
  box-sizing: border-box;

  @media (max-width:560px) {
   font-size: 2rem;
  }
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
