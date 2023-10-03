import styled from "styled-components";

export const Texto = styled.h3`
     display: flex;
    gap: 30px;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.5em;
    color: ${(prop) => prop.cor?prop.cor : '#FFFFFF96'};
`;