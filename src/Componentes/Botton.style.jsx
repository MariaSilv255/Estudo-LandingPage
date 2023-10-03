import styled from "styled-components";

export const Botton = styled.button`
  
  font-family: "DM Sans", Sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 1px;
    color:${(prop) => prop.color ? prop.color : "#000000" };
    background-color: ${(prop) => prop.background ? prop.background : "#45F5A1" };
    border-style: solid;
    border-width: ${(prop) => prop.borderwidth ? prop.borderwidth : "8px" };
    border-color: ${(prop) => prop.bordercolor ? prop.bordercolor : "#000000C4" };
    border-radius: 50px;
    padding: 23px 36px 21px 36px;
    width: 257px;

    &:hover{
        opacity: 0.7;
    }
`;