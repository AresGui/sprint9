import styled from 'styled-components';
import backgroundImage from '../../assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg';
import starts from '../../assets/stars.jpg'


export const Background = styled.div`
  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${backgroundImage}); */
  background-image: url(${starts});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 65% 35%;
  height: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   max-height: 100%;
    overflow-y: scroll;
`;

export const MainDiv = styled.div`
font-family: 'Bitter', serif;
font-size: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
text-align: center;
padding: 30px;
height: 500px;
width: 400px;
color: black;
background: rgba(193, 130, 130, 0.8);
border: 4px black;
border-radius: 4px;
margin: 80px;
`;

export const Button = styled.button`
font-family: 'Bitter', serif;
font-size: xx-large;
 background: none;
 color: white;
 cursor: pointer;
 font-size: 15px;
 margin: 30px;
 padding: 10px 25px;
 border: 1px solid whitesmoke;
 border-radius: 5px;
 display: inline-block;

  &:hover {
    background-color: #373535;
    }
`;
