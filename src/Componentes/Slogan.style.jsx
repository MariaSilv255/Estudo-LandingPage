import styled from "styled-components";



export const Slogan = styled.h2`
    padding-bottom: 40px;
    
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px ;
    color: ${(prop) => prop.cor?prop.cor:'#45f5a1'}; 
`;