import styled from "styled-components";

export const Title = styled.h1`
   color: #fff;
   font-family: 'DM Sans', sans-serif;
    font-size: 78px;
    max-width: 580px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.5px; 
    color: ${(prop) => prop.cor?prop.cor:'#fff'};
`;